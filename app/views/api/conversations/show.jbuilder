json.id @conversation.id
json.users do
  json.set! @conversation.recipient_id, @conversation.recipient.username
  json.set! @conversation.sender_id, @conversation.sender.username
end
json.messages do
  json.array! @conversation.messages do |message|
    json.body message.body
    json.user_id message.user_id
    json.age time_ago_in_words(message.created_at)
    json.id message.id
  end
end
