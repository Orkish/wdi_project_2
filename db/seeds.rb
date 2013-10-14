
require 'continent'
require 'geocoder'
require 'time'
require 'nokogiri'

	f = File.open('public/ewr_test2.html')
	page = Nokogiri::HTML.parse(f)
	table = page.css('table.tableListingTable')
	data = table.search('tr')
	max_rows = data.length - 1
	(2..max_rows).each do |i|
		time = data[i].children[8].children[0].text.gsub("\n","")
		place = data[i].children[0].children[2].text.gsub(" ","").gsub(/(?<=[A-Za-z])(?=[A-Z])/, ' ')
		city_object = Geocoder.search(place)
		sleep 0.5
		if city_object.first == nil 
			puts "Shit is nil, bro"
		else
			begin
				puts place
				country_code = city_object.first.data["address_components"].last["short_name"]
				continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
				if time && place
					adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
					Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
					puts "putting #{i}th entry"
				else
					puts "wtf!!"
				end
			rescue
			end
		end
		#  if city_object
		#  	puts city_object.first.data
		#  else 
		#  	puts Geocoder.search(place)
		#  end
		# country_code = city_object.first.data["address_components"][3]["short_name"]
		# continent_code = Continent.by_alpha_2_code(country_code)[:continent_codes][0]
		# 	if time && place
		# 		adjusted_time = Time.strptime(time, "%I:%M %P").strftime("%H:%M")
		# 		Flight.create(city: place, departure: adjusted_time, continent: continent_code, country: country_code)
		# 	else
		# 		puts "wtf!!"
		# 	end
end
		