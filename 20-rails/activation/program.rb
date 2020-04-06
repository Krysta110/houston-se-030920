require_relative './User'
require 'pry'


User.create({ name: 'Violet', age: 12 })
User.create({ name: 'Megan', age: 32 })
User.create({ name: 'Eddie', age: 40 })
User.create({ name: 'Graham', age: 19 })
User.create({ name: 'Kim', age: 16 })
User.create({ name: 'Ethan', age: 13 })
User.create({ name: 'Hannah', age: 24 })

def teenagers
    # How would I select the teenagers from my users?
    # @teenagers = []
    # User.all.each do | user |
    #     if(13 <= user.age && user.age <= 18)
    #         @teenagers.push(user)
    #     end
    # end
    # @teenagers
    User.all.select do | user |
        13 <= user.age && user.age <= 18
    end
end









binding.pry