class CreateEventEntertainers < ActiveRecord::Migration[7.0]
  def change
    create_table :event_entertainers do |t|
      t.integer :event_id
      t.integer :entertainer_id

      t.timestamps
    end
  end
end
