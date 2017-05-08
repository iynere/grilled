export const fetchConversations = () => (
  $.ajax({
    url: '/api/conversations',
  })
);

export const fetchConversation = id => (
  $.ajax({
    url: `/api/conversations/${id}`,
  })
);

export const createConversation = conversation => (
  $.ajax({
    url: '/api/conversations',
    method: 'POST',
    data: { conversation },
  })
);

export const updateConversation = conversation => (
  $.ajax({
    url: `/api/conversations/${conversation.id}`,
    method: 'POST',
    data: { conversation },
  })
);
