class AdminSessionsController < ApplicationController
    def create
        admin = Admin.find_by(admin_name: params[:admin_name])
        # byebug
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {errors: ["Invalid admin name or password!"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :admin_id
        render json: {}, status: :no_content
    end

    
end
