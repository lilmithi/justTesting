class SessionsController < ApplicationController
 
    def create
        client = Client.find_by(client_name: params[:client_name])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client, status: :created
        else
            render json: {errors: ["Invalid username or password!"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :client_id
        return json: {}, status: :no_content
    end


end
