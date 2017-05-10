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

export const createMessage = message => (
  $.ajax({
    url: '/api/messages/',
    method: 'POST',
    data: { message },
    dataType: 'JSON',
  })
);
