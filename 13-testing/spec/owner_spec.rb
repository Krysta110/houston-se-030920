# The run automatically when you run `rspec` in the terminal
# Has access to rspec testing functions
# They all run after the spec_helper

describe(Owner) do 

    it("has a class method to log an owner in") do
        Owner.login('Angelo')
        owner = Owner.find_by({ name: 'Angelo' })
        expect(owner.name).to(eq('Angelo'))
    end

    it("has a save_dog method") do 
        angelo = Owner.login('Angelo')
        angelo.save_dog("Tilly")
        dog = Dog.find_by({ name: 'Tilly'})
        expect(dog.name).to(eq('Tilly'))
        expect(dog.owner).to(eq(angelo))
    end

end


# * describe
# * it 
# * expect
# * .to eq
# * `where`
# 
