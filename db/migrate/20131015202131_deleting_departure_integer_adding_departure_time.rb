class DeletingDepartureIntegerAddingDepartureTime < ActiveRecord::Migration
	def change
    remove_column :flights, :departure_time
    add_column :flights, :departure_time, :time
	end
end
