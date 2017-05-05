FactoryGirl.define do
  factory :conversation do
    subject Faker::Hipster.sentence(3)
    association :sender, factory: :user
    association :recipient, factory: :user

    factory :conversation_with_offer do
      offer Faker::Number.between(25, 300)
    end
  end
end
