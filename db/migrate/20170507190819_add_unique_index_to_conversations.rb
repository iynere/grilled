class AddUniqueIndexToConversations < ActiveRecord::Migration[5.0]
  def change
    add_index :conversations, ["listing_id", "sender_id"], unique: true
  end
end
