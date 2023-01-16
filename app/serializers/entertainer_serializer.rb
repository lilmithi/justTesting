class EntertainerSerializer < ActiveModel::Serializer
  attributes :id, :entertainer_name, :entertainer_image

  has_many :event_entertainers
  has_many :events, through: :event_entertainers
end
