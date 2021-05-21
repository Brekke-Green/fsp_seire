class Api::RoutesController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @routes = Route.all()
        render :index
    end

    def show
        @route = Route.find_by(id: params[:user_id])
        if @route
            render :show
        else
            render json: ["No route exists"], status: 404
        end
    end

    def create 
        @route = Route.new(route_params)
        @route.user_id = current_user.id 
        if @route.save 
            render :show 
        else
            render json: @route.errors.full_messages, status: 401
        end
    end
    
    def update 
        @route = Route.find_by(id: params[:id])
        if @route 
            if @route.update(route_params)
                render :show 
            else
                render json: @route.errors.full_messages, status: 422
            end
        else 
            render json: ['No route exists'], status: 404
        end
    end
    
    def destroy 
        @route = Course.find_by(id: params[:id])
        @user = current_user
        if @route
            if @user.id == @route.user_id
                @route.destory 
                render "api/users/show"
            else
                render json: ["Cannot delete this course"], status: 422
            end
        else
            render json: ["No route exists"], status: 404
        end
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
