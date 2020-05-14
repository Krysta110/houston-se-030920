Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get('/airlines', to: 'airlines#index')

  get('/airline_tickets/:id', to: 'airlines#airline_tickets')

  post('/tickets', to: 'tickets#create')
  
end
