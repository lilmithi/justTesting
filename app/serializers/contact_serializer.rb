class ContactSerializer < ActiveModel::Serializer
  attributes :id, :contact_name, :contact_image, :contact_tel

  belongs_to :event
end
