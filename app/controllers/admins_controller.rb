class AdminsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        admins = Admin.all
        render json: admins, status: :ok
    end

    def show
        admin = Admin.find_by(id: session[:admin_id])
        render json: admin, status: :ok
    end

    def create
        admin = Admin.create!(admin_params)
        render json: admin, status: :created
    end

    def update
        admin = find_admin
        admin.update!(admin_params)
        render json: admin, status: :created
    end

    def destroy
        admin = find_admin
        admin.destroy
        render json: {}, status: :no_content
    end

    private

    def find_admin
        Admin.find(params[:id])
    end

    def admin_params
        params.permit(:admin_name,:admin_image,:email,:password,:password_confirmation)
    end

    def render_response_not_found
        render json: {errors: ["Admin not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
