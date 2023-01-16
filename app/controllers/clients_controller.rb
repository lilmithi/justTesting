class ClientsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# before_action :authorize
# skip_before_action :authorize, only: [:index, :update, :create]

    def index
        clients = Client.all
        render json: clients, status: :ok
    end

    def create
        client = Client.create!(client_params)
        session[:client_id] = client.id
        render json: client, status: :created
    end

    def show
        client = Client.find_by(id: session[:client_id])
        render json: client, status: :ok
    end

    def update
        client = find_client
        client.update!(client_params)
        render json: client, status: :created
    end

    def destroy
        client = find_client
        client.destroy
        head :no_content
    end

    private 

    def find_client
        Client.find(params[:id])
    end

    def client_params
        params.permit(:client_name, :client_image, :email, :bought_tickets, :password, :password_confirmation)
    end

    def render_response_not_found
        render json: {errors: ["client not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        return render json: {errors: ["Unauthorized"]}, status: :unauthorized unless session.include? :client_id
    end
end
