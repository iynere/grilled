class Conversation < ApplicationRecord
  validates :sender, :recipient, :listing, presence: true
  validates :offer, numericality: { allow_nil: true }
  validates :sender, uniqueness: { scope: :listing_id }
  validate :sender_cannot_be_recipient

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"
  belongs_to :listing
  has_many :messages

  private

  def sender_cannot_be_recipient
    if self.sender == self.recipient
      errors.add(:recipient, "cannot be the same as sender")
      errors.add(:sender, "cannot be the same as recipient")
    end
  end
end
