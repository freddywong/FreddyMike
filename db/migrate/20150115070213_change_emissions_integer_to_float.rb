class ChangeEmissionsIntegerToFloat < ActiveRecord::Migration
  def change
    change_column :cars, :emissionperkm, :float
  end
end
