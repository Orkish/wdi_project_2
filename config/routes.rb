ProjectTwo::Application.routes.draw do
  devise_for :administrators

  root to: 'flights#load'
  get '/flights/:counter', to: "flights#test", as: "flights"
  get '/index', to: "flights#index"
  get '/test2', to: "flights#test2"
  get '/desperation', to: "flights#desperation"
  get '/data', to: "flights#data"
  get '/administrators/sign_out', to: "flights#administrators/sign_out"
  # match '*path' => redirect('/') #  unless Rails.env.development?
end
