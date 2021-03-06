namespace :filldb do

	desc "fill db"
	task :seed => :environment do

		# Flight.delete_all
		# Airport.delete_all


		puts "Welcome to rake tasks!!!"
		require 'continent'
		require 'geocoder'
		require 'time'
		require 'nokogiri'
		require 'open-uri'
		
		# Airport.create(name: "EWR")
		# puts "Created Newark!"
		# Airport.create(name: "JFK")
		# puts "Created JFK!"
		Airport.create(name: "LGA")
		puts "Created LGA!"

		newark_airport = Airport.where(name: "EWR")[0]
		jfk_airport = Airport.where(name: "JFK")[0]
		lga_airport = Airport.where(name: "LGA")[0]
		

		prev_date = Date.today.prev_day.to_s
		m = 0
		j = 0
		o = 0
		###################################################LAGUARDIA AIRPORT#############################################################
		while o < 24 do
		# while m < 6 do # Test Loop
			page = Nokogiri::HTML(open("http://www.flightstats.com/go/FlightStatus/flightStatusByAirport.do?airport=LGA&airportQueryDate=#{prev_date}&airportQueryTime=#{o}&airlineToFilter=&airportQueryType=0&x=23&y=5"))
			o += 1
			if o == 1		#if number 1
				o += 5
			end  #ends if number 1
			table = page.css('table.tableListingTable')
			data = table.search('tr')
			max_rows = data.length - 1
			(2..max_rows).each do |i|
			# (2..10).each do |i| # TEST loop.
				time = data[i].children[8].children[0].text.gsub("\n","")
				place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
				airline_name = data[2].children[6].children.text
				city_object = Geocoder.search(place)
				sleep 0.5
				if city_object.first == nil  #if number 2
					puts "nil, bro"
				else
					begin
						puts place
						country_code = city_object.first.data["address_components"].last["short_name"]
						continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
						if time && place	# if number 3
							adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
							flight1 = Flight.create(city: place, departure_time: adjusted_time, continent: continent_code, country: country_code)
							lga_airport.flights << flight1
							begin
								Airline.create(name: airline_name)
							rescue
							end
							puts "putting #{i}th entry"
						else
							puts "wtf!!"
						end  # ends if number 3
						rescue
					end  # ends begin
				end # ends if number 2
			end #ends do
		end	#ends while loop
		#################################################################################################################################

		################################################JOHN F. KENNEDY AIRPORT #########################################################
		# while j < 24 do
		# # while m < 6 do # Test Loop
		# 	page = Nokogiri::HTML(open("http://www.flightstats.com/go/FlightStatus/flightStatusByAirport.do?airport=JFK&airportQueryDate=#{prev_date}&airportQueryTime=#{j}&airlineToFilter=&airportQueryType=0&x=23&y=5"))
		# 	j += 1
		# 	if j == 1		#if number 1
		# 		j += 5
		# 	end  #ends if number 1
		# 	table = page.css('table.tableListingTable')
		# 	data = table.search('tr')
		# 	max_rows = data.length - 1
		# 	(2..max_rows).each do |i|
		# 	# (2..10).each do |i| # TEST loop.
		# 		time = data[i].children[8].children[0].text.gsub("\n","")
		# 		place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
		# 		airline_name = data[2].children[6].children.text
		# 		city_object = Geocoder.search(place)
		# 		sleep 0.5
		# 		if city_object.first == nil  #if number 2
		# 			puts "nil, bro"
		# 		else
		# 			begin
		# 				puts place
		# 				country_code = city_object.first.data["address_components"].last["short_name"]
		# 				continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
		# 				if time && place	# if number 3
		# 					adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
		# 					flight1 = Flight.create(city: place, departure_time: adjusted_time, continent: continent_code, country: country_code)
		# 					jfk_airport.flights << flight1
		# 					begin
		# 						Airline.create(name: airline_name)
		# 					rescue
		# 					end
		# 					puts "putting #{i}th entry"
		# 				else
		# 					puts "wtf!!"
		# 				end  # ends if number 3
		# 				rescue
		# 			end  # ends begin
		# 		end # ends if number 2
		# 	end #ends do
		# end	#ends while loop
		####################################################################################################################################

		################################################# NEWARK INTERNATIONAL AIRPORT #####################################################
		# while m < 24 do
		# # while m < 6 do # Test Loop
		# 	page = Nokogiri::HTML(open("http://www.flightstats.com/go/FlightStatus/flightStatusByAirport.do?airport=EWR&airportQueryDate=#{prev_date}&airportQueryTime=#{m}&airlineToFilter=&airportQueryType=0&x=23&y=5"))
		# 	m += 1
		# 	if m == 1		#if number 1
		# 		m += 5
		# 	end  #ends if number 1
		# 	table = page.css('table.tableListingTable')
		# 	data = table.search('tr')
		# 	max_rows = data.length - 1
		# 	(2..max_rows).each do |i|
		# 	# (2..10).each do |i| # TEST loop.
		# 		time = data[i].children[8].children[0].text.gsub("\n","")
		# 		place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
		# 		airline_name = data[2].children[6].children.text
		# 		city_object = Geocoder.search(place)
		# 		sleep 0.5
		# 		if city_object.first == nil  #if number 2
		# 			puts "nil, bro"
		# 		else
		# 			begin
		# 				puts place
		# 				country_code = city_object.first.data["address_components"].last["short_name"]
		# 				continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
		# 				if time && place	# if number 3
		# 					adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
		# 					flight1 = Flight.create(city: place, departure_time: adjusted_time, continent: continent_code, country: country_code)
		# 					newark_airport.flights << flight1
		# 					begin
		# 						Airline.create(name: airline_name)
		# 					rescue
		# 					end
		# 					puts "putting #{i}th entry"
		# 				else
		# 					puts "wtf!!"
		# 				end  # ends if number 3
		# 				rescue
		# 			end  # ends begin
		# 		end # ends if number 2
		# 	end #ends do
		# end	#ends while loop
		##############################################################################################################################
	end
end	





