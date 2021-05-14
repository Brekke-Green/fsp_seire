class Api::RoutesController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        
    end

    def show

    end

    def create 

    end
    
    def update 
        
    end
    
    def destroy 

    end

    private
    def route_params
        params.require(:route).permit(
            :user_id,
            :route_data,
            :distance,
            :route_name
        )
    end

end
