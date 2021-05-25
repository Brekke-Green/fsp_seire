class Api::WorkoutsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @workouts = Workout.all()
        render :index
    end

    def show 
        @workout = Workout.find_by(id: params[:user_id])
        if @workout
            render :show
        else
            render json: ["No workout exists"], status: 404
        end
    end

    def create
        @workout = Workout.new(workout_params)
        @workout.user_id = current_user.id 
        if @workout.save 
            render :show 
        else
            render json: @workout.errors.full_messages, status: 401
        end
    end

    def update
        @workout = Workout.find_by(id: params[:id])
        if @workout 
            if @workout.update(workout_params)
                render :show 
            else
                render json: @workout.errors.full_messages, status: 422
            end
        else 
            render json: ['No workout exists'], status: 404
        end
    end

    def destroy 
        @workout = Workout.find_by(id: params[:id])
        @user = current_user
        if @workout
            if @user.id == @workout.user_id
                @workout.destory 
                render "api/users/show"
            else
                render json: ["Cannot delete this workout"], status: 422
            end
        else
            render json: ["No workout exists"], status: 404
        end
    end

    private 
    def workout_params 
        params.require(:workout).permit(
            :user_id,
            :route_id,
            :workout_type,
            :duration
        )
    end

end
