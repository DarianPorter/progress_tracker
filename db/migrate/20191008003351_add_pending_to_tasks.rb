class AddPendingToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :pending, :boolean, null: false, default: false
  end
end
