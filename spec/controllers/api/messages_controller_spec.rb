require 'rails_helper'

describe Api::MessagesController, type: :controller do

  render_views

  describe '#create' do

    let(:current_user) { create(:user) }
    let(:message_body) { Faker::Hipster.sentence}

    before :each do
      allow(controller).to receive(:current_user).and_return(current_user)
    end

    context 'given an associated conversation' do

      before :each do
        @message = {
          body: message_body,
          conversation_id: create(:conversation).id,
        }
      end
      before do
        post :create, params: { message: @message}
      end
      it 'sends a response with expected message' do
        parsed_response = JSON.parse(response.body)
        expect(parsed_response["body"]).to eq(@message[:body])
        expect(parsed_response["conversation"]).to eq(@message[:conversation])
      end

      it 'creates a new message in the database' do
        expect(JSON.parse(response.body)["id"]).to eq(Message.last.id)
      end

      context 'when passed an offer' do
        before do
          @message[:offer] = Faker::Number.between(50, 300)
          post :create, params: { message: @message}
        end

        it 'updates the offer on the associated conversation' do
          expect(Conversation.find(@message[:conversation_id]).offer).to eq(@message[:offer])
        end
      end

    end
    context 'without an associated conversation' do

      before do
        @message = {
          body: message_body,
          listing_id: create(:listing).id,
        }
        allow(controller).to receive(:current_user).and_return(current_user)
        post :create, params: { message: @message }
      end

      it 'returns 200 status' do
        expect(response.status).to eq(200)
      end

      it 'creates an associated conversation for the new message' do
        expect(Conversation.exists?(listing_id: @message[:listing_id], sender_id: current_user.id))
          .to be(true)
      end
    end
  end
end
