class EventSponsorSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :sponsor_id

  belongs_to :event
  belongs_to :sponsor
end
