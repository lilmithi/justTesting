class EntertainersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        entertainers = Entertainer.all
        render json: entertainers, status: :ok
    end

    def create
        entertainer = Entertainer.create!(entertainer_params)
        render json: entertainer, status: :created
    end

    def show
        entertainer = find_entertainer
        render json: entertainer, status: :ok
    end

    def destroy
        entertainer = find_entertainer
        entertainer.destroy
        render json: {}, status: :no_content
    end

    private

    def entertainer_params
        params.permit(:entertainer_name, :entertainer_image, :entertainer_description)
    end

    def find_entertainer
        Entertainer.find(params[:id])
    end

    def render_response_not_found
        render json: {errors: ["Entertainer not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
