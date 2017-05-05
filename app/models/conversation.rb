class Conversation < ApplicationRecord
  validates :sender, :recipient, :listing, presence: true
  validates :offer, numericality: { allow_nil: true }

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"
  belongs_to :listing
end
