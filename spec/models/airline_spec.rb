require 'spec_helper'

describe Airline do 
	before :each do 
		@airline = Airline.new(name: "US Airlines")
		@flight = Flight.new(city: "Chicago", continent: "US", departure: "14:00", airport_id: "1")
		@airport = Airport.new(name: "Newark")
		@airline.airport << @airport
	end

	describe "#name" do
		it "should return the correct airline name" do 
			@airline.name.should eq("US Airlines")
		end
	end
end
