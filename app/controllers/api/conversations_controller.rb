class Api::ConversationsController < ApplicationController
  def index
    @conversations = Conversation.where(recipient: current_user)
      .or(Conversation.where(sender: current_user))
      .includes(:recipient, :sender, :listing)
  end

  def show
    @conversation = Conversation.includes(:recipient, :sender, :listing).find(params[:id])
  end

  def create
    @conversation = Conversation.new(conversation_params)

    if @conversation.save
      render json: { offer: @conversation.offer, id: @conversation.id }, status: 200
    else
      render json: @conversation.errors, status: 422
    end
  end

  def update
    @conversation = Conversation.find(params[:id])

    if @conversation.update(conversation_params)
      render json: { offer: @conversation.offer, id: @conversation.id }, status: 200
    else
      render json: @conversation.errors, status: 422
    end
  end

  private
  def conversation_params
    params.require(:conversation).permit(:sender_id, :recipient_id, :listing_id, :offer)
  end
end
