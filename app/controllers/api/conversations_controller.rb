class Api::ConversationsController < ApplicationController
  before_action :require_logged_in
  
  def index
    @conversations = Conversation.where(recipient: current_user)
      .or(Conversation.where(sender: current_user))
      .includes(:recipient, :sender, :listing)
  end

  def show
    @conversation = Conversation.includes(:recipient, :sender, :messages).find(params[:id])
  end

  private
  def conversation_params
    params.require(:conversation).permit(:offer)
  end
end
