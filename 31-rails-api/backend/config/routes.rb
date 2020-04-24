Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get('/get-json', to: 'characters#get_json')

  get('/characterData', to: 'characters#character_data')

  post('/characterData', to: 'characters#save_character_data')

end