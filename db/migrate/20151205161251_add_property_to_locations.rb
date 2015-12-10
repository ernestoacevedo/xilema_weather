class AddPropertyToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :property, :string
    add_column :locations, :region, :string
    add_column :locations, :sector, :string
  end
end
