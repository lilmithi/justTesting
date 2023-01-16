class CreateSponsors < ActiveRecord::Migration[7.0]
  def change
    create_table :sponsors do |t|
      t.string :sponsor_name
      t.string :sponsor_image

      t.timestamps
    end
  end
end
