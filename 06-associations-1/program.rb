require_relative './models/Owner.rb'
require_relative './models/Breed.rb'
require_relative './models/Animal.rb'
require_relative './models/Cat.rb'
require_relative './models/Dog.rb'

poodle = Breed.new("Poodle", 1.5)
cockerspaniel = Breed.new("Cockerspaniel", 1.5)

tim = Owner.new("Tim")
cole = Owner.new("Cole")


cooper = Dog.new({ name: 'Cooper', owner: tim, breed: poodle })
tess = Dog.new({ name: 'Tess', owner: tim, breed: cockerspaniel })
sugar = Dog.new({ name: 'Sugar', owner: cole, breed: cockerspaniel })


p tim.breeds