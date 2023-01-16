class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :event_card_image, :description, :date, :time, :runs_till, :category, :location_id, :ticket_regular, :ticket_vip, :ticket_vvip, :rating, :available_tickets

  has_many :tickets
  has_many :comments
  belongs_to :location
  # has_many :event_sponsors
  has_many :sponsors, through: :event_sponsors
  has_many :event_images
  # has_many :event_entertainers
  has_many :entertainers, through: :event_entertainers
  has_many :contacts
end
