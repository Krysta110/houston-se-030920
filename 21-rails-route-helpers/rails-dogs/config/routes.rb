Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources(:dogs)

  # get('/dogs', { to: 'dogs#index'})

  # get('/dogs/new', {to: 'dogs#new'})

  # post('/dogs', {to: 'dogs#create'})
  
  # get('/dogs/:id', { to: 'dogs#show'})

end