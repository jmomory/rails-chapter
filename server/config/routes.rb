Rails.application.routes.draw do
  namespace :api do
    get "orders", to: "orders#index"
    get "orders/countries", to: "orders#countries"
    get "orders/revenue/:country", to: "orders#revenue"
    get "orders/average/:country", to: "orders#average_revenu_order"
    get "orders/customers/:country", to: "orders#customers"
    get "orders/monthlyrevenue/:country", to: "orders#revenue_per_month"
    post "orders/populate", to: "orders#populate"
  end
end
