class FlightsController < ApplicationController

	require 'open-uri'
	require 'time'
	require 'continent'
	require 'mechanize'
	

	def index
		@flights = Flight.all		
	end

	def test
		
		time_segment = []
		start_time = Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours # start_time is 00:00
		end_time = Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours + 15.minutes # end_time is -23:45
		while end_time <= Time.new(2000, 1, 2, 0, 0, 0).utc - 5.hours
			flights = Flight.where(:departure_time => start_time...end_time)
			start_time += 15.minutes
			end_time += 15.minutes	
			# time_segment = 		
			# flights.each do |flight|
			# 	flight_segment = []
			# 	flight_segment << [[flight.continent, flight.departure]]							
			respond_to do |format|
				format.html
				format.json {render :json => {flights: flights}}
			end
		
		end
		
	end

	def test2


	# def test
	# 	prev_date = Date.today.prev_day.to_s
	# 	m = 0
	# 	while m < 24 do
	# 		page = Nokogiri::HTML(open("http://www.flightstats.com/go/FlightStatus/flightStatusByAirport.do?airport=EWR&airportQueryDate=#{prev_date}&airportQueryTime=#{m}&airlineToFilter=&airportQueryType=0&x=23&y=5"))
	# 		m += 1
	# 		if m == 1		#if number 1
	# 			m += 5
	# 		end  #ends if number 1
	# 		table = page.css('table.tableListingTable')
	# 		data = table.search('tr')
	# 		binding.pry
	# 		max_rows = data.length - 1
	# 		(2..max_rows).each do |i|
	# 			time = data[i].children[8].children[0].text.gsub("\n","")
	# 			place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
	# 			airline_name = data[2].children[6].children.text
	# 			city_object = Geocoder.search(place)
	# 			sleep 0.5
	# 			if city_object.first == nil  #if number 2
	# 				puts "Shit is nil, bro"
	# 			else
	# 				begin
	# 					puts place
	# 					country_code = city_object.first.data["address_components"].last["short_name"]
	# 					continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
	# 					if time && place	# if number 3
	# 						adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
	# 						Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
	# 						begin
	# 							Airline.create(name: airline_name)
	# 						rescue
	# 						end
	# 						puts "putting #{i}th entry"
	# 					else
	# 						puts "wtf!!"
	# 					end  # ends if number 3
	# 					rescue
	# 				end  # ends begin
	# 			end # ends if number 2
	# 		end #ends do
	# 	end		#ends while loop
	# 	binding.pry
	# end  #ends def test

end # ends class


	########################SEED FILE CONTROLLER TEST###############################
	# def test
	# 	f = File.open('public/ewr_test.html')
	# 	page = Nokogiri::HTML.parse(f)
	# 	table = page.css('table.tableListingTable')
	# 	binding.pry
	# 	data = table.search('tr')
	# 	max_rows = data.length - 1
	# 	(2..max_rows).each do |i|
	# 		time = data[i].children[8].children[0].text.gsub("\n","")
	# 		place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
	# 		country_code = Geocoder.search(place)[0].data["address_components"][3]["short_name"]
	# 		continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
	# 		if time && place
	# 			adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
	# 			Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
	# 		else
	# 			puts "wtf!!"
	# 		end
	# 	end
	# end


	################################# MECHANIZE #####################################
	# def test
	# 	agent = Mechanize.new
	# 	# @page = agent.get('https://www.flightstats.com/go/Login/login.do')
	# 	@page = Mechanize.new{|a| a.ssl_version, a.verify_mode = 'SSLv3', OpenSSL::SSL::VERIFY_NONE}.get "https://www.flightstats.com/go/Login/login.do"
	# 	flightstats_form = @page.form('loginForm')
	# 	binding.pry

	# end
