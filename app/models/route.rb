class Route < ApplicationRecord

    validates :route_data, :user_id, :distance, presence: true
    validates :route_name, uniqueness: { scope: :user_id }

    belongs_to :user,
    foreign_key: :user_id
end