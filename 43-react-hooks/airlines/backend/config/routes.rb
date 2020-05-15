Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get('/airlines', to: 'airlines#index')

  get('/airlines/:id', to: 'airlines#show')

  post('/tickets', to: 'tickets#create')
  
end
