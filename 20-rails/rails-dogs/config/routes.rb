Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get('/list-dogs', { to: 'dogs#index'})

  get('/create-dog-forms', {to: 'dogs#create_dog_forms'})

  post('/create-dog', {to: 'dogs#create'})
  
  get('/get-dog/:id', { to: 'dogs#view_dog'})

end