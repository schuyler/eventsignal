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
require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { build :user }

  it { is_expected.to validate_presence_of :first_name }
  it { is_expected.to validate_presence_of :last_name }

  context "when email is blank" do
    subject(:user) { build :user, email: '  ' }

    it { is_expected.to validate_presence_of :phone_number }
  end

  context "when phone_number is nil" do
    subject(:user) { build :user, phone_number: nil }

    it { is_expected.to validate_presence_of :email }
  end

  context "when phone_number is blank" do
    subject(:user) { build :user, phone_number: '       ' }

    it { is_expected.to be_invalid }
  end

  context "when phone_number is too short" do
    subject(:user) { build :user, phone_number: '4158675309' }

    it { is_expected.to be_invalid }
  end

  context "when phone_number is just right" do
    subject(:user) { build :user, phone_number: '+14158675309' }

    it { is_expected.to be_valid }
  end
end
