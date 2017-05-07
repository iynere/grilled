json.array! @conversations do |conversation|
  json.extract! conversation, :id, :offer
  json.sender do
    json.username conversation.sender.username
    json.id conversation.sender.id
  end
  json.recipient do
    json.username conversation.recipient.username
    json.id conversation.recipient.id
  end
  json.listing do
    json.name conversation.listing.name
    json.id conversation.listing.id
  end
  json.age time_ago_in_words(conversation.updated_at)
end
