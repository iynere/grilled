require 'rails_helper'

describe Message, type: :model do
  subject { create(:message) }
  describe 'validations' do
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:conversation) }
  end

  describe 'assocations' do
    it { should belong_to(:conversation) }
    it { should belong_to(:user) }
  end
end
