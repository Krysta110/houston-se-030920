class Airline < ActiveRecord::Base

    has_many(:tickets)
    # def tickets
    #     "SELECT * FROM tickets WHERE tickets.airline_id = #{self.id}"
    # end

end