json.extract! @listing, :id, :name, :price, :brand, :sold, :user_id, :description
json.username @listing.user.username
