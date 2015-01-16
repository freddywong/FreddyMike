class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :origin
      t.string :destination
      t.integer :days
      t.integer :time_period

      t.timestamps null: false
    end
  end
end
