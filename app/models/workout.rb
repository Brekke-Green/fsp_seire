class Workout < ApplicationRecord
    validates :user_id, :route_id, :workout_type, :duration, presence: true 

    belongs_to :user,
    foreign_key: :user_id

    belongs_to :route,
    foreign_key: :route_id
end