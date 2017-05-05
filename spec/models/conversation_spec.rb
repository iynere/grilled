require 'rails_helper'

describe Conversation, type: :model do
  describe 'validations' do
    context 'without offer' do
      subject { create(:conversation) }
      it{ should validate_presence_of(:subject) }
      it{ should validate_presence_of(:sender) }
      it{ should validate_presence_of(:recipient) }
    end
    context 'with offer' do
      subject { create(:conversation_with_offer) }
      it{ should validate_numericality_of(:offer) }
    end
  end
  describe 'associations' do
    subject { create(:converation) }
    it{ should have_one(:subject) }
    it{ should have_one(:recipient) }
  end
end
