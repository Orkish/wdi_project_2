require 'continent'
require 'geocoder'
require 'time'
require 'nokogiri'
require 'open-uri'

prev_date = Date.today.prev_day.to_s
m = 0
# while m < 24 do
while m < 6 do # Test Loop
	page = Nokogiri::HTML(open("http://www.flightstats.com/go/FlightStatus/flightStatusByAirport.do?airport=EWR&airportQueryDate=#{prev_date}&airportQueryTime=#{m}&airlineToFilter=&airportQueryType=0&x=23&y=5"))
	m += 1
	if m == 1		#if number 1
		m += 5
	end  #ends if number 1
	table = page.css('table.tableListingTable')
	data = table.search('tr')
	max_rows = data.length - 1
	# (2..max_rows).each do |i|
	(2..10).each do |i| # TEST loop.
		time = data[i].children[8].children[0].text.gsub("\n","")
		place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
		airline_name = data[2].children[6].children.text
		city_object = Geocoder.search(place)
		sleep 0.5
		if city_object.first == nil  #if number 2
			puts "Shit is nil, bro"
		else
			begin
				puts place
				country_code = city_object.first.data["address_components"].last["short_name"]
				continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
				if time && place	# if number 3
					adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
					flight1 = Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
					newark_airport = Airport.find(1)
					newark_airport.flights << flight1
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
end		#ends while loop












# 	f = File.open('public/ewr_test2.html')
# 	page = Nokogiri::HTML.parse(f)
# 	table = page.css('table.tableListingTable')
# 	data = table.search('tr')
# 	max_rows = data.length - 1
# 	(2..max_rows).each do |i|
# 		time = data[i].children[8].children[0].text.gsub("\n","")
# 		place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
# 		city_object = Geocoder.search(place)
# 		sleep 0.5
# 		if city_object.first == nil 
# 			puts "Shit is nil, bro"
# 		else
# 			begin
# 				puts place
# 				country_code = city_object.first.data["address_components"].last["short_name"]
# 				continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
# 				if time && place
# 					adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
# 					Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
# 					puts "putting #{i}th entry"
# 				else
# 					puts "wtf!!"
# 				end
# 			rescue
# 			end
# 		end
# 		#  if city_object
# 		#  	puts city_object.first.data
# 		#  else 
# 		#  	puts Geocoder.search(place)
# 		#  end
# 		# country_code = city_object.first.data["address_components"][3]["short_name"]
# 		# continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
# 		# 	if time && place
# 		# 		adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
# 		# 		Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
# 		# 	else
# 		# 		puts "wtf!!"
# 		# 	end
# end
		