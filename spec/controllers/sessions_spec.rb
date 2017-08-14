require 'rails_helper'

describe Api::SessionsController, type: :controller do
  describe 'create' do
    let!(:user) { create(:user, password: 'pr0p4n3') }
    context 'with correct login info' do
      it 'should respond with status of 200' do
        post :create, params: { user: { username: user[:username], password: 'pr0p4n3' }}
        expect(response.status).to eq(200)
      end
    end
    context 'with incorrect login info' do
      it 'should respond with status of 401' do
        post :create, params: { user: { username: user[:username], password: 'ch4rc04l' }}
        expect(response.status).to eq(401)
      end
    end
  end
end
