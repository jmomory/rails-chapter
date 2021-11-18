class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.timestamp :date
      t.integer :order_id
      t.integer :customer_id
      t.string :country
      t.string :product_code
      t.string :product_description
      t.integer :quantity
      t.float :unit_price

      t.timestamps
    end
  end
end
