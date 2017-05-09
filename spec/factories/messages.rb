FactoryGirl.define do
  factory :message do
    body Faker::Hipster.sentence(5)
    conversation
    user
  end
end
