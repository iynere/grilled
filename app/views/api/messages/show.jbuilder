json.extract! @message, :id, :user_id, :body, :conversation_id
json.username @message.user.username
