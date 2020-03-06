class Dog

    def initialize(sound, first_name, last_name)
        @sound = sound
        @first_name = first_name
        @last_name = last_name
    end

    def full_name
        return "#{@first_name} #{@last_name}"
    end

    def bark
        puts "#{sound}, My name is __!"
    end

end


tilly = Dog.new('Tilly', 'Miles')

puts tilly.full_name