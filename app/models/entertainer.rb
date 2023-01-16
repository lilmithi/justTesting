class Entertainer < ApplicationRecord
    validates :entertainer_name, presence: true
    has_many :event_entertainers
end
