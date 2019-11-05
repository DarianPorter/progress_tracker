class DropAndDeleteKey < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cohort_id
    drop_table :cohorts
    add_column :users, :cohort_name, :string 
  end
end
