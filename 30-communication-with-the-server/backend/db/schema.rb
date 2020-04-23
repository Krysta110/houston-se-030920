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

ActiveRecord::Schema.define(version: 2019_04_10_013816) do

  create_table "npcs", force: :cascade do |t|
    t.string "name"
    t.string "x"
    t.string "y"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "x"
    t.string "y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "fast_mode"
  end

  create_table "steps", force: :cascade do |t|
    t.string "direction"
    t.integer "duration"
    t.integer "npc_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["npc_id"], name: "index_steps_on_npc_id"
  end

end
