class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.integer :route_id, null: false
      t.string :workout_type, null: false
      t.integer :duration, null: false

      t.timestamps
    end
    add_index :workouts, :user_id, unique: true
    add_index :workouts, :route_id, unique: true
  end
end
