class Dog

    def initialize(options)
        @sound = "Woof"
        @first_name = options[:first_name]
        @last_name = options[:last_name]
    end

    attr_reader(:first_name)
    attr_reader(:last_name)
    # def first_name()
    #     return @first_name
    # end
    

    def full_name()
        return "#{self.first_name} #{self.last_name}"
    end

    

    def bark()
        puts "#{@sound}, My name is #{self.full_name}!"
    end

    

    # attr_reader(:first_name)

 

    # attr_writer(:first_name)
    # def first_name=(value)
    #     @first_name = value
    # end

    # def first_name=(new_first_name) # new_first_name => "Sucrose"
    #     if(new_first_name.length > 10)
    #         puts "That name is too long. You will regret that"
    #     else
    #         @first_name = new_first_name
    #     end
    # end

end


cooper = Dog.new({ first_name: "Cooper", last_name: "Morales" })


sugar = Dog.new({ first_name: "Sugar", last_name: "Stevens" })


# p sugar.full_name 




# bank_hash = {
#     deposits: 100
# }


class Bank 

   def deposits
    puts "Someone checked the deposits"
    return @deposits
   end  

    def initialize
        @deposits = 100
    end

    def function_1
        @deposits
    end


    def function_2
        @deposits
    end
end

bank_object = Bank.new

p bank_object.deposits()

# bank_object.deposits = 200000000000

# bank_hash[:deposits] = 2000000000000

