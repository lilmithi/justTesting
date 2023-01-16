class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :client_id, :event_id

  belongs_to :event
end
