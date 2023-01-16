class EventImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :event_id

  belongs_to :event
end
