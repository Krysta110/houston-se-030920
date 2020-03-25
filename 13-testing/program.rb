require_relative './config/environment.rb'

prompt = TTY::Prompt.new

ActiveRecord::Base.logger = nil

user_name = prompt.ask("What's your name?")
owner = Owner.login(user_name)

while true

    user_input = prompt.select('What would you like to do?', [
        "Rescue a Dog",
        "Display my Dogs",
        "Display youngest Dog"
    ])

    if(user_input == "Rescue a Dog")
        dog_name = prompt.ask('What do you want to name the dog?')
        owner.save_dog(dog_name) # <- TODO: Finish this method
    end

    if(user_input == "Display my Dogs")
        owner.dogs.each do | dog |
            puts dog.name
        end
    end

    if(user_input == "Display youngest Dog")
        # TODO
    end
end