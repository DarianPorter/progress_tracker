class UrlToTask < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :url, :string 
  end
end
