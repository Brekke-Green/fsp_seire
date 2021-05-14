class Route < ApplicationRecord

    validates :route_data, :user_id, :distance, presence: true
    validates :routeName, uniqueness: { scope: :user_id }

    

end