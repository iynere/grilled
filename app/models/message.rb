class Message < ApplicationRecord
  validates :conversation, :user, :body, presence: true

  belongs_to :user
  belongs_to :conversation

  before_validation :ensure_conversation

  attr_reader :offer, :listing_id

  def listing_id=(listing_id)
    @listing_id = listing_id
  end

  def offer=(offer)
    @offer = offer
  end

  private
  def ensure_conversation
    conversation = self.conversation || Conversation.find_by(sender_id: self.user_id, listing_id: listing_id)

    if conversation.nil?
      recipient_id = Listing.find(listing_id).user_id
      conversation = Conversation.new(sender_id: self.user_id, listing_id: listing_id, recipient_id: recipient_id)
      conversation.save!
    elsif conversation.offer != offer
      conversation.offer = offer
      conversation.save!
    end

    self.conversation = conversation
  end
end
