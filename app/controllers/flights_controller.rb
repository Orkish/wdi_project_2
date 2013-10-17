class FlightsController < ApplicationController

	require 'open-uri'
	require 'time'
	require 'continent'
	
	def data
		@flights = Flight.all
	end

	def index
		@flights = Flight.all		
	end

	def sign_out
		redirect_to '/data'
	end


	def test
		
			# [["AS", "NA", "EU", "SA"],[],[],[]]

		counter = params[:counter].to_i
		time_segment = []
		# start_time = counter * 15.minutes
		# end_time = (counter + 1) * 15.minutes
		start_time = (Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours) + counter * 15.minutes # start_time is 00:00
		end_time = (Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours + 15.minutes) + counter * 15.minutes # end_time is -23:45
		# while end_time <= Time.new(2000, 1, 2, 0, 0, 0).utc - 5.hours
		flights = Flight.where(:departure_time => start_time...end_time)
			# start_time += 15.minutes
			# end_time += 15.minutes	
			flight_array = []
			flights.each do |flight|
				flight_array << flight.continent
			end
									
			respond_to do |format|
				format.html
				format.json {render :json => {flights: flight_array}}
			end
		
		# end
		
	end

	def test2
		counter = 0
		final_array = []
		while counter < 97
			start_time = (Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours) + counter * 15.minutes # start_time is 00:00
			end_time = (Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours + 15.minutes) + counter * 15.minutes # end_time is -23:45
			flights = Flight.where(:departure_time => start_time...end_time)
			flight_array = []
			flights.each do |flight|
				flight_array << flight.continent
				puts flight
			end
			counter+= 1
			final_array << flight_array
		end
		header = "Test this mutha!"
		file = "my_file.csv"
		File.open(file, "w") do |csv|
			csv << header
			csv << "\n"
			final_array.each do |f|
				csv << f
				csv << "\n"
			end
		end
		redirect_to '/flights/1'
	end

	def desperation
		counter = 0
		n = 0
		obj = {}
		final_array = []
		# flight_hash = {}
		while counter < 97
			start_time = (Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours) + counter * 15.minutes # start_time is 00:00
			end_time = (Time.new(2000, 1, 1, 0, 0, 0).utc - 5.hours + 15.minutes) + counter * 15.minutes # end_time is -23:45
			flights = Flight.where(:departure_time => start_time...end_time)
			flight_array = []
			flights.each do |flight|
				case flight.continent
				when "NA"
					value = 1
				when "EU"
					value = 2
				when "AS"
					value = 3
				when "AF"
					value = 4
				when "SA"
					value = 5
				else
					value = 1
				end
				flight_array << value
				puts flight
			end
			# flight_hash["t#{counter}"] = flight_array
			counter += 1
			final_array << flight_array
		end
		while n < 97 do
			# obj[:"t#{n}"] = final_array[n]
			obj[:"#{n}"] = final_array[n]
			n += 1
		end
		# obj = final_array.map do |f|
		# 	{:"t#{n}"=> f}
		# 	n += 1
		# end
		json = obj.to_json
		file = "flights.json"
		File.open(file, "w+") do |stuff|
			stuff << json
		end
		redirect_to "/flights/1"
	end


end # ends class

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
