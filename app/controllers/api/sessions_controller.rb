class Api::SessionsController < ApplicationController
    
    def create
        # Find user by credentials
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Nope. Wrong credentials!'], status: 401
        else
            login!(@user)
            render 'api/users/show';
        end
    end
    
    def destroy
        if !current_user.nil?
            logout!
            return render json: {}
        end
        render json: ['User not logged in'], status: 404
    end
end
