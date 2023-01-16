class Client < ApplicationRecord
    has_secure_password
    validates :client_name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :bought_tickets, numericality: {only_integer: true}
    validates :password, presence: true, length: {in: 6..20}

    has_many :tickets, dependent: :destroy
    has_many :events, through: :tickets
    has_many :comments, dependent: :destroy
    
end
