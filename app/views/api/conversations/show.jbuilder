json.id @conversation.id
json.messages do
  json.array! @conversation.messages do |message|
    json.body message.body
    json.user_id message.user_id
    json.username @conversation.recipient_id == message.user_id ? @conversation.recipient.username : @conversation.sender.username
    json.age time_ago_in_words(message.created_at)
    json.id message.id
  end
end
