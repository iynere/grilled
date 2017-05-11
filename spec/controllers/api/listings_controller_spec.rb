require 'rails_helper'

describe Api::ListingsController, type: :controller do

  render_views

  describe 'index' do
    let!(:listings) { create_list(:listing, Faker::Number.between(1, 10))}
    before do
      get :index, format: :json
    end
    it 'returns the expected listings' do
      expect(JSON.parse(response.body).length).to eq(listings.length)
    end
  end
  describe 'show' do
    let!(:listing) { create(:listing) }
    before do
      get :show, params: { id: listing.id }, format: :json
    end
    it 'returns the expected listing' do
      expect(response.body).to include(listing.name.to_s)
      expect(JSON.parse(response.body)["id"]).to eq(listing.id)
    end
  end
end
