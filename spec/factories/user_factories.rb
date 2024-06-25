FactoryBot.define do
  factory :user do
    first_name { "John" }
    last_name  { "Doe" }
    email { "user@example.com" }
    phone_number { 4158675309 }
  end
end
