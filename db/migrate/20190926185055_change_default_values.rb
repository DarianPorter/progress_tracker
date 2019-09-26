class ChangeDefaultValues < ActiveRecord::Migration[5.2]
  def change
    change_column_default :objectives, :finished, false
    change_column_default :tasks, :finished, false
    change_column_null :users, :email, false
    change_column_null :users, :password_digest, false
    change_column_null :users, :first_name, false
    change_column_null :users, :last_name, false
    change_column_null :tasks, :taskname, false
    change_column_null :tasks, :description, false
    change_column_null :objectives, :name, false
    change_column_null :cohorts, :year, false
  end
end
