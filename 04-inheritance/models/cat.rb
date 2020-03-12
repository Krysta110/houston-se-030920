class Cat < Animal

    attr_accessor(:sound, :name)

    def initialize(options)
        self.sound = "Meow"
        self.name = options[:name]
    end

    def pur
        puts @sound
    end

end