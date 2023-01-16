class EventImagesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        event_images = EventImage.all
        render json: event_images, status: :ok
    end

    def create
        event_image = EventImage.create!(event_image_params)
        render json: event_image, status: :created
    end

    def show
        event_image = find_event_image
        render json: event_image, status: :ok
    end

    def destroy
        event_image = find_event_image
        event_image.destroy
        render json: {}, status: :no_content
    end

    private

    def find_event_image
        EventImage.find(params[:id])
    end

    def event_image_params
        params.permit(:image_url, :event_id)
    end

    def render_response_not_found
        render json: {errors: ["Event image not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
