FactoryGirl.define do
  factory :listing do
    sold false
    name Faker::Hipster.word
    brand Faker::Hipster.word
    price Faker::Number.between(25, 500)
    association :user, factory: :user
  end
end
