class Ticket < ApplicationRecord
    belongs_to :client
    belongs_to :event
end
