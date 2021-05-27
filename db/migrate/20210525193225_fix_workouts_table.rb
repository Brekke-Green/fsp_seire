class FixWorkoutsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :workouts, :route_id
    remove_index :workouts, :user_id 
    add_index :workouts, :route_id
    add_index :workouts, :user_id
  end
end
