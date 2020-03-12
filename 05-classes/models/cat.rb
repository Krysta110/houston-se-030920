class Cat < Animal

    def initialize(options)
        self.sound = "Meow"
        self.name = options[:name]
    end

    def pur
        puts @sound
    end

end