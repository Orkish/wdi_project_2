require 'spec_helper'

describe Flight do 
	## see if any of these flights exist
	before :each do 
		@flight = Flight.new(city: "Saint Louis", country: "US", continent: "NA", departure_time: "000-01-01 00:00:00")
		@airline = Airline.new(name: "United")
		@airport = Airport.new(name: "EWR")
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
		assert @flight.departure_time
	end

	it "should belong to an airline" do
		@airline.flights << @flight
		@airline.flights.first.should eq(@flight)
	end

	it "should belong to an an airport" do
		@airport.flights << @flight
		@airport.flights.first.should eq(@flight)
	end

end	