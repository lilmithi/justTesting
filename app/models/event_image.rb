class EventImage < ApplicationRecord
    validates :image_url, presence: true
    validates :event_id, presence: true
    belongs_to :event
end
