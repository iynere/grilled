require 'rails_helper'

describe User, type: :model do
  describe 'validations' do
    subject { create(:user) }
    it { should validate_presence_of(:username)}
    it { should validate_uniqueness_of(:username)}

    it { should validate_presence_of(:email)}
    it { should validate_uniqueness_of(:email)}

    it { should validate_presence_of(:session_token)}
    it { should validate_uniqueness_of(:session_token)}

    it { should validate_presence_of(:password_digest)}
  end

  describe 'associations' do
    it { should have_many(:sent_conversations)}
    it { should have_many(:received_conversations)}
  end
end
