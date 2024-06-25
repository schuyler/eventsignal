FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    email { Faker::Internet.email }
    phone_number { rand(201_101_0000..989_999_9999) }
  end
end
