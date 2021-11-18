class AddIndexToCountry < ActiveRecord::Migration[6.1]
  def change
    add_index :orders, :country
  end
end
