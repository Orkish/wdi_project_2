class CreateAirlines < ActiveRecord::Migration
  def change
    create_table :airlines do |t|
      t.string :name, :unique => true, :null => false

      t.timestamps
    end
  end
end
