class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    # before_action :authorize
    # skip_before_action :authorize, only: [:index, :]

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create
        # @current_client = Client.find_by(id: session[:client_id])
        # comment = @current_client.comments.create!(comment_params)
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def show
        comment = find_comment
        render json: comment, status: :ok
    end

    def destroy
        comment = find_comment
        comment.destroy
        render json: {}, status: :no_content
    end

    private

    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:content, :client_id, :event_id)
    end

    def authorize
        return render json: {errors: ["Please login to post a comment"]}, status: :unauthorized unless session.include? :client_id
    end

    def render_response_not_found
        render json: {errors: ["Comment not found!"]}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
