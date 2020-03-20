require 'require_all'
require_all('app')
while true

    puts "All Dogs:"
    Dog.all.each do | dog |
        puts dog.name
    end
    
    puts "Enter a new dogs name:"
    user_input = gets.chomp()

    Dog.new({ name: user_input })

end

Dog.new({ name: 'Tess' }) # INSERT INTO dogs (name) VALUES ("Tess")