class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :admin_name
      t.string :admin_image
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
