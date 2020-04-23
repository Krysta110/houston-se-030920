Rails.application.routes.draw do
  
  resources :npcs
  resources :players

  get 'characterData', to: 'characters#get_character_data'

  post 'characterData', to: 'characters#update_character_data'

  patch 'log', to: 'characters#log'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
