require 'sqlite3'
db = SQLite3::Database.new('dogs.db')
db.results_as_hash = true

puts "Please enter a dogs name:"
user_input = gets.chomp()

dogs = db.execute_batch("
    SELECT * FROM dogs WHERE name='?';
", [ user_input ])

puts dogs