class Airport < ActiveRecord::Base
  attr_accessible :name
  has_and_belongs_to_many :airlines
  has_many :flights
end
