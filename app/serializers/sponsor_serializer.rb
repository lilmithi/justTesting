class SponsorSerializer < ActiveModel::Serializer
  attributes :id, :sponsor_name, :sponsor_image

  has_many :event_sponsors
  has_many :events, through: :event_sponsors
end
