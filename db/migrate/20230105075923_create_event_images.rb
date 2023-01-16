class CreateEventImages < ActiveRecord::Migration[7.0]
  def change
    create_table :event_images do |t|
      t.string :image_url
      t.integer :event_id

      t.timestamps
    end
  end
end
