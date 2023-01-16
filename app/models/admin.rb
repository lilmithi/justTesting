class Admin < ApplicationRecord
    has_secure_password
    validates :admin_name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {in: 6..20}
end
