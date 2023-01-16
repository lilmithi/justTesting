class Comment < ApplicationRecord
    validates :content, presence: true
    validates :client_id, presence: true
    validates :event_id, presence: true
    belongs_to :client
    belongs_to :event
end
