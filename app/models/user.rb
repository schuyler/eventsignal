# == Schema Information
#
# Table name: users
#
#  id           :bigint           not null, primary key
#  first_name   :string
#  last_name    :string
#  phone_number :bigint
#  email        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, unless: ->(user) { user.phone_number.present? }
  validates :email, format: URI::MailTo::EMAIL_REGEXP
  validates :phone_number, presence: true, unless: ->(user) { user.email.present? }
  validates :phone_number, numericality: { greater_than_or_equal_to: 201_101_0000, less_than: 989_999_9999 }
end
