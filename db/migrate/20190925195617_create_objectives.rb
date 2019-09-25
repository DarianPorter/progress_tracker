class CreateObjectives < ActiveRecord::Migration[5.2]
  def change
    create_table :objectives do |t|
      t.string :name, null: :false
      t.boolean :finished, default: :false

    end
  end
end
