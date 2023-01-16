# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_11_085051) do
  create_table "admins", force: :cascade do |t|
    t.string "admin_name"
    t.string "admin_image"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "client_name"
    t.string "client_image"
    t.string "email"
    t.integer "bought_tickets", default: 0
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.integer "client_id"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "contact_name"
    t.string "contact_image"
    t.string "contact_tel"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "entertainers", force: :cascade do |t|
    t.string "entertainer_name"
    t.string "entertainer_image"
    t.string "entertainer_description", default: "No description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_entertainers", force: :cascade do |t|
    t.integer "event_id"
    t.integer "entertainer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_images", force: :cascade do |t|
    t.string "image_url"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_sponsors", force: :cascade do |t|
    t.integer "sponsor_id"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "event_name"
    t.string "event_card_image"
    t.text "description"
    t.string "date"
    t.string "time"
    t.string "runs_till"
    t.string "category"
    t.integer "location_id"
    t.integer "ticket_regular"
    t.integer "ticket_vip"
    t.integer "ticket_vvip"
    t.float "rating"
    t.integer "available_tickets"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "location_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sponsors", force: :cascade do |t|
    t.string "sponsor_name"
    t.string "sponsor_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "client_id"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
