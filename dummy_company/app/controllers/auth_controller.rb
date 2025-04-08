class AuthController < ApplicationController
    def register
        if User.exists?(email: user_params[:email])
            render json: { error: 'Email already registered' }, status: :unprocessable_entity
            return
        end
        user = User.new(user_params)
        if user.save
            render json: { status: 'created', user: user }, status: :created
         else
            render json: { errors: user.errors.full_messages }, status: :bad_request
        end
    end
  
    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        render json: { status: 'logged_in', user: user }, status: :ok
      else
        render json: { errors: ['Invalid email or password'] }, status: :unauthorized
      end
    end
  
    private
  
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
  end
  
