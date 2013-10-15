class DeleteDeparture < ActiveRecord::Migration
  def up
  remove_column :flights, :departure
end

  def down
  end
end
