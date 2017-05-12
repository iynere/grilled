class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.where.not(user: current_user)
  end

  def show
    @listing = Listing.find(params[:id])
  end
end
