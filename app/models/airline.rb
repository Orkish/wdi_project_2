class Airline < ActiveRecord::Base
  attr_accessible :name
  has_and_belongs_to_many :airports
  has_many :flights, through: :airport
end
