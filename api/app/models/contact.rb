class Contact < ApplicationRecord
    validates :first_name, :last_name, :email, :phone_number, presence: { message: "%{attribute} can not be empty or blank" }
    validates :email, format: { with: /\A(\S+)@(.+)\.(\S+)\z/, message: "Oops! %{attribute} address must contain @ and domain e.g. name@domain.com" }
    validates :phone_number, format: { with: /\A[\d\+\s]+$\z/, message: "%{attribute} only allows numbers and '+' sign" }
end
