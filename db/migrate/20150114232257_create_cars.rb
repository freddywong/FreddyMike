class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :brandmodel
      t.integer :emissionperkm

      t.timestamps null: false
    end
  end
end
