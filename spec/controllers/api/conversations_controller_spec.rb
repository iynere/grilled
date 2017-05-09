require 'rails_helper'

describe Api::ConversationsController, type: :controller do

  render_views

  describe 'index' do
    let!(:conversations) { create_list(:conversation, Faker::Number.between(5, 10))}
    let!(:user) { create(:user) }
    let!(:received_by_user) { create_list(:conversation, Faker::Number.between(1, 4), recipient: user) }
    let!(:sent_by_user) { create_list(:conversation, Faker::Number.between(1, 4), sender: user)}
    before do
      allow(controller).to receive(:current_user) { user }
      get :index, format: :json
    end
    it 'returns the correct number of converations associated with the current_user' do
      expect(JSON.parse(response.body).size).to eq(received_by_user.count + sent_by_user.count)
    end
  end
  describe 'show' do
    let!(:conversation) { create(:conversation) }
    before do
      get :show, params: { id: conversation.id }, format: :json
    end
    it 'returns the correct conversation' do
      expect(JSON.parse(response.body)["id"]).to eq(conversation.id)
    end
  end
  # describe 'update' do
  #   let!(:conversation) { create(:conversation_with_offer) }
  #   let!(:new_offer) { Faker::Number.between(1, 24) }
  #   before do
  #     post :update, params: { id: conversation.id, conversation: { offer: new_offer } }
  #   end
  #   it 'updates the offer column with new amount' do
  #     expect(JSON.parse(response.body)["offer"].to_i).to eq(new_offer)
  #   end
  # end
end
