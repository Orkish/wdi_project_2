require 'spec_helper'

describe Airline do 
	before :each do 
		@airline = Airline.new
	end
	it "should return a list of associated flights" do 
		@airline.flights.should be Array	 
		# describe "#flight" do 
		# assert somecode 
		# end 
		# no assert + .should be 
	end
	# it "" do 
end


## these are the things being created in each airline object
#		(id: integer, name: string, created_at: datetime, updated_at: datetime)
 