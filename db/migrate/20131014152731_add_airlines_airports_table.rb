class AddAirlinesAirportsTable < ActiveRecord::Migration
	def change
    create_table :airlines_airports, :id => false do |t|
      t.integer :airline_id
      t.integer :airport_id
    end
	end
end
