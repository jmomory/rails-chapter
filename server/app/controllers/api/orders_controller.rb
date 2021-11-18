# frozen_string_literal: true

require "csv"

module Api
  class OrdersController < ApplicationController

    def index
      render json: {}
    end

    def countries
      countries = Order.select(:country).map(&:country).uniq
      render json: { countries: countries }
    end

    def revenue
      revenue = 0
      customer_orders_by_country = Order.where(country: params[:country]).to_a

      customer_orders_by_country.map do |order|
        order_price = order.quantity * order.unit_price
        revenue = revenue + order_price
      end
      render json: { revenue: revenue.round(1) }
    end

    def average_revenu_order
      revenue = 0
      customer_orders_by_country = Order.where(country: params[:country]).to_a

      customer_orders_by_country.map do |order|
        order_price = order.quantity * order.unit_price
        revenue = revenue + order_price
      end

      average = revenue / customer_orders_by_country.length 
      render json: { average: average.round(1) }
    end

    def customers
      customer_orders_by_country = Order.where(country: params[:country]).to_a
      customer_numbers_by_country = customer_orders_by_country.group_by{ |c| c.customer_id }
      render json: { numbers: customer_numbers_by_country.count }
    end

    def revenue_per_month
      customer_orders_by_country = Order.where(country: params[:country]).to_a

      order_sort_by_date = customer_orders_by_country.group_by{ |o| o.date.strftime("%Y%m") }
      revenues = order_sort_by_date.map do |period, orders|
        revenue = 0
        orders.map do |order|
          order_price = order.quantity * order.unit_price
          revenue = revenue + order_price
        end
        { period: period, revenue: revenue.round(1) }
      end
      render json: { revenue_per_month: revenues }
    end

    def populate
      orders = []
      index = 0
      csv_text = File.read(Rails.root.join("lib", "csvs", "memory-tech-challenge-data.csv"))
      csv = CSV.parse(csv_text, :headers => true, :encoding => "ISO-8859-1")
      csv.each do |row|
        orders.push({
          date: row["date"],
          order_id: row["order_id"],
          customer_id: row["customer_id"],
          country: row["country"],
          product_code: row["product_code"],
          product_description: row["product_description"],
          quantity: row["quantity"],
          unit_price: row["unit_price"],
          created_at: Time.now,
          updated_at: Time.now,
        })
        index = index + 1
        if index == 500
          puts "start inserting all"
          Order.insert_all(orders)
          index = 0
          orders = []
        end
      end
      puts "start inserting all"
      Order.insert_all(orders)
      render json: { status: 'Ok' }
    end

  end
end
