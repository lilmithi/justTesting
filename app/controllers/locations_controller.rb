class LocationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    def create
        location = Location.create!(location_params)
        render json: location, status: :created
    end

    def index
        locations = Location.all
        render json: locations, status: :ok
    end

    def show
        location = find_location
        render json: location, status: :ok
    end

    def destroy
        location = find_location
        location.destroy
        render json: {}, status: :no_content
    end

    private

    def find_location
        Location.find(params[:id])
    end

    def location_params
        params.permit(:id, :location_name)
    end

    def render_response_not_found
        render json: {errors: ["Location not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
end
