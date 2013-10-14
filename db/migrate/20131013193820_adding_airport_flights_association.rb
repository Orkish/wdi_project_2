class AddingAirportFlightsAssociation < ActiveRecord::Migration
  def change
  	add_column :flights, :airport_id, :integer
  end
end
