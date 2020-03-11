class Dog

    def initialize(options)
        @sound = "Woof"
        @first_name = options[:first_name]
        @last_name = options[:last_name]
        # "#{@first_name} #{@last_name}"
    end

    def bark
        p @sound
    end

end

tess = Dog.new({ first_name: "Tess", last_name: "Miles" })
tilly = Dog.new({ first_name: "Tilly", last_name: "Miles" })

p tess




# $tilly = {
#     sound: 'Woof',
#     first_name: 'Tilly',
#     last_name: 'Miles',
#     full_name: 'Tilly Miles'
# }

# def tilly_bark()
#     puts $tilly[:sound]
# end


# $tess = {
#     sound: 'Woof',
#     first_name: 'Tess',
#     last_name: 'Miles',
#     full_name: 'Tess Miles'
# }

# def tess_bark()
#     puts $tess[:sound]
# end