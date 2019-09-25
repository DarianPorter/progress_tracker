class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :taskname, null: :false
      t.string :description, null: :false
      t.boolean :finished, default: :false
    end
  end
end
