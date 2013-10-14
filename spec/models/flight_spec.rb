require 'spec_helper'

describe Flight do 
	
	before :each do 
		@flights = Flight.new
	end
	
	it "should have an id" do 
		assert @flight.id  
	end
	
	it "should have a destination city" do 
		assert @flight.city
	end
	
	it "should have a destination country" do 
		assert @flight.country
	end 
	
	it "should have a destination continent" do 
		assert @flight.continent
	end
	
	it "should have a departure time" do
		assert @flight.departure
	end

	it "should have an airport_id" do
		assert @flight.airport_id
	end 
	
		# no assert + should be 
		# it "" do 
end	