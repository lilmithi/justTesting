class Location < ApplicationRecord
    validates :location_name, presence: true
    has_many :events
end
