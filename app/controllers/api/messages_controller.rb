class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors, status: 422
    end
  end

  private
  
  def message_params
    params.require(:message).permit(:body, :listing_id, :user_id, :offer)
  end
end
