Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get('/dogs/new', { to: 'dogs#new' })
  
  # post('/dogs', { to: 'dogs#create' })
  
  # get('/dogs', { to: 'dogs#index' })
  
  # get('/dogs/:id', { to: 'dogs#show' })
  
  # get('/breeds/:id', { to: 'breeds#show'})
  
  # get('/feeding_times/:id', { to: 'feeding_times#show'})

  resources(:dogs, :breeds, :feeding_times)

end
