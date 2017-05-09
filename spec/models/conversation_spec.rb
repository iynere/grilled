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
end
