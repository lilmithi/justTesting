class Contact < ApplicationRecord
    validates :contact_name, presence: true
    validates :contact_tel, presence: true
    validates :event_id, presence: true
    belongs_to :event
end
