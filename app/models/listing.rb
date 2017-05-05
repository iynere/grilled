class Listing < ApplicationRecord
  validates :name, :brand, presence: true
  validates :price, presence: true, numericality: true

  has_many :conversations
  belongs_to :user

end
