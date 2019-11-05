class AddColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :cohort_name, :class_year
  end
end
