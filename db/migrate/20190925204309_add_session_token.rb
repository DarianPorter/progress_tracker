class AddSessionToken < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :sessionToken, :string
  end
end
