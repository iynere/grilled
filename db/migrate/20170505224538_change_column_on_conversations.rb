class ChangeColumnOnConversations < ActiveRecord::Migration[5.0]
  def change
    remove_column :conversations, :subject
    add_column :conversations, :listing_id, :integer, null: false, index: true
  end
end
