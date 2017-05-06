json.array! @listings do |listing|
  json.extract! listing, :id, :name, :brand, :price
end
