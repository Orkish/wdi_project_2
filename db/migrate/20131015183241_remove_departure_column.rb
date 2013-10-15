class RemoveDepartureColumn < ActiveRecord::Migration

def up
    add_column :flights, :departure_time, :integer
end
 
def down
  remove_column :flights, :departure_time
end
end