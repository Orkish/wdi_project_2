require 'spec_helper'

describe Airline do 
	before :each do 
		@airline = Airline.new(name: "United")
		@flight = Flight.new(city: "Saint Louis", country: "US", continent: "NA", departure: "2000-01-01 00:00:00", airport_id: "1")
		@airport = Airport.new(name: "EWR")
		# @airline.airport << @airport
	end

	describe "#name" do
		it "should return the correct airline name" do 
			@airline.name.should eq("United")
		end
	end
end
