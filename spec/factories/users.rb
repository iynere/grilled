FactoryGirl.define do
  factory :user do
    username { Faker::Internet.user_name }
    email { Faker::Internet.email }
    password { Faker::Lorem.characters(6) }
  end
end
