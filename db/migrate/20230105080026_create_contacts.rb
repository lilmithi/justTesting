class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :contact_name
      t.string :contact_image
      t.string :contact_tel
      t.integer :event_id

      t.timestamps
    end
  end
end
