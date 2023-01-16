class CreateEventSponsors < ActiveRecord::Migration[7.0]
  def change
    create_table :event_sponsors do |t|
      t.integer :sponsor_id
      t.integer :event_id

      t.timestamps
    end
  end
end
