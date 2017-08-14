require 'rails_helper'

describe Api::UsersController, type: :controller do
  describe 'create' do
    context 'with valid parameters' do
      let!(:user) { attributes_for(:user) }
      before :each do
        post :create, params: { user: user }
      end
      it 'should respond with 200 status' do
        expect(response.status).to eq(200)
      end
      it 'should create a new user in the database with correct username and email' do
        expect(User.last[:username]).to eq(user[:username])
        expect(User.last[:email]).to eq(user[:email])
      end
    end

    context 'with invalid parameters' do
      it 'should respond with 422 status' do
        post :create, params: { user: { username: ''} }
        expect(response.status).to eq(422)
      end
    end
  end
end
