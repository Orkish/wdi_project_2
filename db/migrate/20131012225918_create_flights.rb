class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :city
      t.string :country, :default => "no country"
      t.string :continent, :default => "no continent"
      t.time :departure

      t.timestamps
    end
  end
end
