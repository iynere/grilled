class Message < ApplicationRecord
  validates :conversation, :user, :body, presence: true

  belongs_to :user
  belongs_to :conversation
end
