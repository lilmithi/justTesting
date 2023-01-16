class TicketsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        tickets = Ticket.all
        render json: tickets, status: :ok
    end

    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    def show
        ticket = find_ticket
        render json: ticket, status: :ok
    end

    def destroy
        ticket = find_ticket
        ticket.destroy
        render json: {}, status: :no_content
    end

    private

    def find_ticket
        Ticket.find(params[:id])
    end

    def ticket_params
        params.permit(:client_id, :event_id)
    end 

    def render_response_not_found
        render json: {errors: ["Ticket not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
