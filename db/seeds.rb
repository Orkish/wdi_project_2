puts "Welcome to seeds.rb!"
Airport.delete_all
Flight.delete_all
Airline.delete_all


flight1 = Flight.create(city: "Saint Louis", continent: "NA", country: "US", departure: "00:00")
airport1 = Airport.create(name: "EWR")
airline1 = Airline.create(name: "United")

airport1.flights << flight1
airline1.flights << flight1




# As a user, I would like to find out all the flights of an airline.

# As a user, If I select an airport, I would like to find out all the flights associated.

