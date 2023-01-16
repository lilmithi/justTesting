class SponsorsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        sponsor = Sponsor.create!(sponsor_params)
        render json: sponsor, status: :created
    end

    def index
        sponsors = Sponsor.all
        render json: sponsors, status: :ok
    end

    def show
        sponsor = find_sponsor
        render json: sponsor, status: :ok
    end

    def destroy
        sponsor = find_sponsor
        sponsor.destroy
        render json: {}, status: :no_content
    end

    private

    def find_sponsor
        Sponsor.find(params[:id])
    end

    def sponsor_params
        params.permit(:sponsor_name, :sponsor_image)
    end

    def render_response_not_found
        render json: {errors: ["Sponsor not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
