class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :description
      t.boolean :completed

      t.timestamps
    end
  end
end
