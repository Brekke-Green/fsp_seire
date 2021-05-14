class FixRoutesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :routes, :routeName, :route_name
  end
end
