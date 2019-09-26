class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cohort_id, :integer
    add_column :objectives, :user_id, :integer
    add_column :tasks, :objective_id, :integer
  end
end
