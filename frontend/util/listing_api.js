export const fetchListings = () => (
  $.ajax({
    url: '/api/listings',
  })
);

export const fetchListing = id => (
  $.ajax({
    url: `/api/listings/${id}`,
  })
);
