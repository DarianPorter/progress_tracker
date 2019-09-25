class CreateCohort < ActiveRecord::Migration[5.2]
  def change
    create_table :cohorts do |t|
      t.string :year, null: :false
      t.timestamps 
    end
  end
end
