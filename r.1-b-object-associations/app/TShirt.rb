class TShirt


    @@all = []

    attr_accessor(:color, :brand, :size)

    def initialize(color, brand, size)
        @color = color
        @brand = brand
        @size = size
        @@all.push(self)
    end

    def self.all
        return @@all
    end

    def owners
        owners_of_shirt = []
        Purchase.all.each do | purchase |
            if(purchase.tshirt == self)
                owners_of_shirt.push(purchase.person)
            end
        end
        return owners_of_shirt
    end

end