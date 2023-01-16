class Event < ApplicationRecord
    validates :event_name, presence: true
    validates :description, presence: true, length: {minimum: 5}
    validates :date, presence: true
    validates :time, presence: true
    validates :category, presence: true
    validates :category, inclusion: {in: %w[Festivals Corporate Tech Sports Educational Art]}
    validates :location_id, presence: true
    validates :runs_till, presence: true
    validates :ticket_regular, presence: true, numericality: {only_integer: true}
    validates :ticket_vip, presence: true, numericality: {only_integer: true}
    validates :ticket_vvip, presence: true, numericality: {only_integer: true}
    validates :rating, presence: true, numericality: true
    validates :available_tickets, presence: true, numericality: {only_integer: true}

    has_many :tickets, dependent: :destroy
    has_many :clients, through: :tickets
    has_many :comments, dependent: :destroy
    has_many :event_entertainers, dependent: :destroy
    has_many :entertainers, through: :event_entertainers
    has_many :event_images, dependent: :destroy
    has_many :event_sponsors
    has_many :sponsors, through: :event_sponsors
    has_many :contacts, dependent: :destroy
    belongs_to :location
end
