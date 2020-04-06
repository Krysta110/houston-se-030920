class User

    attr_accessor(:age, :name)

    @@all = []

    def initialize(options)
        @age = options[:age]
        @name = options[:name]
        @@all << self
    end

    def self.all
        @@all
    end

    def self.create(options)
        return User.new(options)
    end

end