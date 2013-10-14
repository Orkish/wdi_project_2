require 'spec_helper'

describe Airport do
  before :each do
    @airport = Airport.new(name: "EWR")
    @flight = Flight.new(city: "Saint Louis", country: "US", continent: "NA", departure: "2000-01-01 00:00:00", airport_id: "1")
  end

  describe "#name" do
    it "should return the correct airport name" do
      @airport.name.should eq("EWR")
    end
  end

  it "should receive a flight association" do
    @airport.flights << @flight
    @airport.flights.first.should eq(@flight)
  end
end