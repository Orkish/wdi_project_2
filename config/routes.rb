ProjectTwo::Application.routes.draw do
  devise_for :administrators

  root to: 'flights#load'
  get '/flights/:counter', to: "flights#test", as: "flights"
  get '/index', to: "flights#index" 
end
