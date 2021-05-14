class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.string :routeName, null: false
      t.string :route_data, null: false
      t.integer :distance, null: false
      
      t.timestamps
    end
  end
end
