class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :client_id
      t.integer :event_id

      t.timestamps
    end
  end
end
