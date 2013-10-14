class Airline < ActiveRecord::Base
  attr_accessible :name
  has_many :flights, through: :airport
end
