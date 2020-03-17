require 'require_all'
require 'pry'
require_all('app')

josh = User.new("Josh Miles")
steven = User.new("Steven Ngyuen")

red_polo = TShirt.new("Red", "Polo", "md")
blue_polo = TShirt.new("Blue", "Polo", "xs")

purchase_1 = Purchase.new(blue_polo, josh)
purchase_2 = Purchase.new(blue_polo, steven)
purchase_3 = Purchase.new(red_polo, steven)


binding.pry
0