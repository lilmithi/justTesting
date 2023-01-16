class EventEntertainersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        event_entertainers = EventEntertainer.all
        render json: event_entertainers, status: :ok
    end

    def create
        event_entertainer = EventEntertainer.create!(event_entertainer_params)
        render json: event_entertainer, status: :created
    end

    def show
        event_entertainer = find_event_entertainer
        render json: event_entertainer, status: :ok
    end

    def destroy
        event_entertainer = find_event_entertainer
        event_entertainer.destroy
        render json: {}, status: :no_content
    end

    private

    def find_event_entertainer
        EventEntertainer.find(params[:id])
    end

    def event_entertainer_params
        params.permit(:event_id, :entertainer_id)
    end

    def render_response_not_found
        render json: {errors: ["Event entertainer not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
