class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :event_card_image
      t.text :description
      t.string :date
      t.string :time
      t.string :runs_till
      t.string :category
      t.integer :location_id
      t.integer :ticket_regular
      t.integer :ticket_vip
      t.integer :ticket_vvip
      t.float :rating
      t.integer :available_tickets

      t.timestamps
    end
  end
end
