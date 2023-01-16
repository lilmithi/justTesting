class EventEntertainerSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :entertainer_id

  belongs_to :event
  belongs_to :entertainer
end
