class LocationSerializer < ActiveModel::Serializer
  attributes :id, :location_name

  has_many :events
end
