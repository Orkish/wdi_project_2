class Flight < ActiveRecord::Base
  attr_accessible :city, :continent, :country, :departure, :airport_id, :airline_id
  belongs_to :airport
  belongs_to :airline
end

