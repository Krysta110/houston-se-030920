class ApplicationController < Sinatra::Base

    get('/get-dog/:id') do
        dog = Dog.find_by({ id: params[:id] }) 
        dog.name
    end

    post('/update-dog/:id') do # params -> { id: 1 } +  { name: 'Tilly' }
        # params # => { id: 1, name: 'Tilly'}
        dog = Dog.find_by({ id: params[:id] }) 
        dog.update({
            name: params[:name]
        })
    end

end


### HTTP Method  + URL  -> Address/Function Name
### Headers -> Postage
### Body -> Contents