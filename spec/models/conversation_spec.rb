require 'rails_helper'

describe Conversation, type: :model do
  subject { create(:conversation) }
  describe 'validations' do
    context 'without offer' do
      it{ should validate_presence_of(:listing) }
      it{ should validate_presence_of(:sender) }
      it{ should validate_presence_of(:recipient) }
      it{ should validate_uniqueness_of(:sender).scoped_to(:listing_id) }
    end
    context 'with offer' do
      subject { create(:conversation_with_offer) }
      it{ should validate_numericality_of(:offer) }
    end
  end
  describe 'associations' do
    it{ should belong_to(:sender) }
    it{ should belong_to(:recipient) }
    it{ should belong_to(:listing) }
  end

  describe '#create_from_message' do
    context 'with valid attributes' do
      before do
        @sender = create(:user)
        @listing = create(:listing)
        @recipient_id = @listing.user.id
        options = { sender_id: @sender.id, listing_id: @listing.id, recipient_id: @recipient_id}
        @conversation = Conversation.create_from_message(options)
      end

      it 'returns the id of the created conversation' do
        expect(Conversation.last.id).to eq(@conversation)
      end

      it 'creates a new conversation' do
        expect(Conversation.last.sender_id).to eq(@sender.id)
        expect(Conversation.last.listing_id).to eq(@listing.id)
      end

      context 'with an offer' do

        before do
          @sender = create(:user)
          @listing = create(:listing)
          @recipient_id = @listing.user.id
          @offer = Faker::Number.between(50, 300)
          options = { sender_id: @sender.id, listing_id: @listing.id, recipient_id: @recipient_id, offer: @offer }
          Conversation.create_from_message(options)
        end

        it 'creates a new conversation with an offer' do
          expect(Conversation.last.offer).to eq(@offer)
        end
      end
    end

    context 'without valid attributes'
    
  end
  describe '#update_offer' do
    let(:conversation) { create(:conversation_with_offer) }
    let(:new_offer) { Faker::Number.between(1, 24) }

    it 'updates converation with new offer' do
      Conversation.update_offer(new_offer, conversation.id)
      expect(Conversation.find(conversation.id).offer).to eq(new_offer)
    end
  end
end
