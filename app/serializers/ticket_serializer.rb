class TicketSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :event_id

  belongs_to :client
  belongs_to :event
end
