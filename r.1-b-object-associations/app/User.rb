class User

    @@all = []

    attr_reader(:name)

    def initialize(name)
        @name = name
        @@all.push(self)
    end

    def buy_tshirt(tshirt)
        purchase = Purchase.new(tshirt, self)
    end

    def tshirts
        # users_tshirts = []
        # Purchase.all.each do | purchase | 
        #     if(purchase.person == self)
        #         users_tshirts.push(purchase.tshirt)
        #     end
        # end
        # return users_tshirts
        users_purchases = Purchase.all.select{ | purchase | purchase.person == self }
        users_tshirts = users_purchases.map { | purchase | purchase.tshirt }
    end

    def tshirt_count
        return self.tshirts.length
    end

    def self.all
        return @@all
    end

    # def self.most_tshirts
    #     most_tshirts = User.all[0]
    #     User.all.each do | user |
    #         if(user.tshirt_count > most_tshirts.tshirt_count)
    #             most_tshirts = user
    #         end
    #     end
    #     return most_tshirts
    # end

    # def self.most_tshirts
    #     most_tshirts = 0
    #     User.all.each do | user |
    #         if(user.tshirts.length > most_tshirts)
    #             most_tshirts = user.tshirts.length
    #         end
    #     end
    #     return most_tshirts
    # end

end