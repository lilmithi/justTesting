class EventsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# before_action :authorize_admin
# skip_before_action :authorize_admin, only: [:index, :show, :update, :destroy]

    def index
        events = Event.all
        render json: events, status: :ok
    end

    def create
        # @current_admin = Client.find_by(id: session[:admin_id])
        # event = @current_admin.events.create!(event_params)
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def show
        event = find_event
        render json: event, status: :ok
    end

    def update
        event = find_event
        event.update!(event_params)
        render json: event, status: :created
    end

    def destroy
        event = find_event
        event.destroy
        render json: {}, status: :no_content
    end

    private

    def find_event
        Event.find(params[:id])
    end

    def event_params
        params.permit(:event_name, :event_card_image, :description, :date, :time, :runs_till, :category, :location_id, :ticket_regular, :ticket_vip, :ticket_vvip, :rating, :available_tickets)
    end

    def render_response_not_found
        render json: {errors: ["Event not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize_admin
        return render json: {error: "Unauthorized access! Login as an admin to create an event"}, status: :unauthorized unless session.include? :client_id
    end 
end
