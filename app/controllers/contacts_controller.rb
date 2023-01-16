class ContactsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    def create
        contact = Contact.create!(contact_params)
        render json: contact, status: :created
    end

    def index
        contacts = Contact.all
        render json: contacts, status: :ok
    end

    def show
        contact = find_contact
        render json: contact, status: :ok
    end

    def destroy
        contact = find_contact
        contact.destroy
        render json: {}, status: :no_content
    end

    private

    def find_contact
        Contact.find(params[:id])
    end

    def contact_params
        params.permit(:contact_name, :contact_image, :contact_tel, :event_id)
    end

    def render_response_not_found
        render json: {errors: ["Contact not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
