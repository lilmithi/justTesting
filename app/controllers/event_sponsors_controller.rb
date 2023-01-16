class EventSponsorsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        event_sponsors = EventSponsor.all
        render json: event_sponsors, status: :ok
    end

    def create
        event_sponsor = EventSponsor.create!(event_sponsor_params)
        render json: event_sponsor, status: :created
    end

    def show
        event_sponsor = find_event_sponsor
        render json: event_sponsor, status: :ok
    end

    def destroy
        event_sponsor = find_event_sponsor
        event_sponsor.destroy
        render json: {}, status: :no_content
    end

    private

    def find_event_sponsor
        EventSponsor.find(params[:id])
    end

    def event_sponsor_params
        params.permit(:sponsor_id, :event_id)
    end

    def render_response_not_found
        render json: {errors: ["Event sponsor not found"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
