class Message < ApplicationRecord
  validates :conversation, :user, :body, presence: true

  belongs_to :user
  belongs_to :conversation

  before_validation :ensure_conversation, :update_offer

  attr_reader :offer, :listing_id, :user_id

  def listing_id=(listing_id)
    @listing_id = listing_id
  end

  def offer=(offer)
    @offer = offer
  end

  private
  def ensure_conversation
    self.conversation ||= Conversation.find_by(sender_id: user_id, listing_id: listing_id)

    if self.conversation.nil? && listing_id
      recipient_id = Listing.find(listing_id).user_id
      self.conversation = Conversation.new(sender_id: user_id, listing_id: listing_id, recipient_id: recipient_id)
      self.conversation.save!
    end
  end

  def update_offer
    if offer && self.conversation.offer != offer
      self.conversation.offer = offer
      self.conversation.save!
    end
  end
end
