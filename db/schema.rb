# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170507190819) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.integer  "offer"
    t.integer  "sender_id",    null: false
    t.integer  "recipient_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "listing_id",   null: false
    t.index ["listing_id", "sender_id"], name: "index_conversations_on_listing_id_and_sender_id", unique: true, using: :btree
    t.index ["recipient_id"], name: "index_conversations_on_recipient_id", using: :btree
    t.index ["sender_id"], name: "index_conversations_on_sender_id", using: :btree
  end

  create_table "listings", force: :cascade do |t|
    t.integer  "user_id",                     null: false
    t.string   "name",                        null: false
    t.string   "brand",                       null: false
    t.string   "description"
    t.integer  "price"
    t.boolean  "sold",        default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["brand"], name: "index_listings_on_brand", using: :btree
    t.index ["name"], name: "index_listings_on_name", using: :btree
    t.index ["user_id"], name: "index_listings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string "username",        null: false
    t.string "email",           null: false
    t.string "password_digest", null: false
    t.string "session_token",   null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
