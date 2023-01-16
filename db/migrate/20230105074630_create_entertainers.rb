class CreateEntertainers < ActiveRecord::Migration[7.0]
  def change
    create_table :entertainers do |t|
      t.string :entertainer_name
      t.string :entertainer_image
      t.string :entertainer_description, default: "No description"

      t.timestamps
    end
  end
end
