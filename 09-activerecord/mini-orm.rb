require 'sqlite3'
require 'pry'

$db = SQLite3::Database.new('dogs.db')
$db.results_as_hash = true

class Dog

    attr_accessor(:id, :name)
    
    def initialize(options)
        @id = options["id"]
        @name = options["name"]
    end


    def self.create(options)
        $db.execute("
            INSERT INTO dogs (name) VALUES ('#{options["name"]}')
        ")
    end

    def self.find(id)
        dogs = $db.execute("
            SELECT * FROM dogs WHERE id=#{id}
        ")
        p dogs
        return Dog.new(dogs[0])
    end


end

binding.pry