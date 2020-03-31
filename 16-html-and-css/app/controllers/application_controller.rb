class ApplicationController < Sinatra::Base

    set(:views, 'app/views')

    get('/get-dog/:id') do # - params[:id] ==2
        @dog = Dog.find_by({ id: params[:id] }) 
        @dog_name = @dog.name
        erb(:dog_display)
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