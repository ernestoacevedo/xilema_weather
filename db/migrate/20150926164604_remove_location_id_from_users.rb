class RemoveLocationIdFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :location_id, :string
  end
end
