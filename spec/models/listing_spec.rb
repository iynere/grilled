require 'rails_helper'

describe Listing, type: :model do
  subject { create(:listing) }
  describe 'validations' do
    it { should validate_presence_of(:user).with_message(:required) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:brand) }
    it { should validate_numericality_of(:price) }
  end
  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:conversations)}
  end
end
