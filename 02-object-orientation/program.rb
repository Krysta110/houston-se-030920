# $tilly = {
#     sound: 'Woof',
#     first_name: 'Tilly',
#     last_name: 'Miles',
#     full_name: 'Tilly Miles'
# }

# def tilly_bark()
#     puts $tilly[:sound]
# end


class Dog 

    def initialize(name, sound)
        @name = name
        @sound = sound
    end

    def bark()
        puts @sound
    end

end

tess = Dog.new("Tess", "Woof")
tilly = Dog.new("Tilly", "Bark")
annie = Dog.new("Annie", "Arf")
dog_doe = Dog.new(nil, "Yip")

p tess
p dog_doe


# class Dog 

#     def initialize(dog_attributes)
#         @name = dog_attributes[:name]
#         @sound = dog_attributes[:sound]
#     end

#     def bark()
#         puts @sound
#     end

# end

# tess = Dog.new({ name: "Tess", sound: 'Woof'})
# tilly = Dog.new({ sound: 'Bark', name: 'Tilly' })
# annie = Dog.new({ name: "Annie", sound: 'Yip yip'})


# annie.bark()
