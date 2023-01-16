class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :client_name
      t.string :client_image
      t.string :email
      t.integer :bought_tickets, default: 0
      t.string :password_digest

      t.timestamps
    end
  end
end
