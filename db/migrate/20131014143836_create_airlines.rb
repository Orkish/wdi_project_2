class CreateAirlines < ActiveRecord::Migration
  def change
    create_table :airlines do |t|
      t.string :name, :unique => true

      t.timestamps
    end
  add_index :airlines, :name, :unique => true
  end
end
