class ClientSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :client_image, :email, :bought_tickets

  has_many :tickets
  has_many :events, through: :tickets
  has_many :comments
end
