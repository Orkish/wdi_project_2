ProjectTwo::Application.routes.draw do
  devise_for :administrators

  root to: 'flights#load'
  get '/flights/:counter', to: "flights#test", as: "flights"
  get '/index', to: "flights#index"
  get '/test2', to: "flights#test2"
  get '/ewr', to: "flights#ewrjson"
  get '/jfk', to: "flights#jfkjson"
  get '/lga', to: "flights#lgajson"
  # match '*path' => redirect('/') #  unless Rails.env.development?
end
