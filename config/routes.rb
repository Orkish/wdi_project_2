ProjectTwo::Application.routes.draw do
  devise_for :administrators

  root to: 'flights#load'
  get '/flights/:counter', to: "flights#test", as: "flights"
  get '/index', to: "flights#index"
  get '/test2', to: "flights#test2"
  get '/desperation', to: "flights#desperation"
  get '/data', to: "flights#data"
  get '/administrators/sign_out', to: "flights#administrators/sign_out"
  get '/ewr', to: "flights#ewrjson"
  get '/jfk', to: "flights#jfkjson"
   match '*path' => redirect('/') #  unless Rails.env.development?
end
