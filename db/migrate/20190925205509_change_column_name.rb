class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :sessionToken, :session_token
  end
end
