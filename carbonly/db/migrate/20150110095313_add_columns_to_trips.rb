class AddColumnsToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :origin, :string
    add_column :trips, :destination, :string
    add_column :trips, :days, :integer
    add_column :trips, :time_period, :integer
  end
end
