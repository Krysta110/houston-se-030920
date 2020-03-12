require_relative('./models/animal.rb')
require_relative('./models/dog.rb')
require_relative('./models/cat.rb')

cooper = Dog.new({ name: 'Cooper' })
sugar = Dog.new({ name: 'Sugar' })

rango = Cat.new({ name: 'Rango' })
kismet = Cat.new({ name: 'Kismet' })

kismet.sleep()