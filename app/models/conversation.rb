class Conversation < ApplicationRecord
  validates :sender, :recipient, :listing, presence: true
  validates :offer, numericality: { allow_nil: true }
  validates :sender, uniqueness: { scope: :listing_id }

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"
  belongs_to :listing

  def self.create_from_message(options)
    conversation = Conversation.create(options)

    if conversation.save
      return conversation.id
    end

    false
  end

  def self.update_offer(offer, id)
    conversation = Conversation.find(id)

    if conversation.update({offer: offer})
      return offer
    end

    false
  end
end
