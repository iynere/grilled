json.extract! @message, :id, :body, :conversation_id
json.username @message.user.username
json.offer @offer.to_i
