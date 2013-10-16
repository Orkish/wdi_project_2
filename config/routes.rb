ProjectTwo::Application.routes.draw do
  root to: 'flights#index'
  get '/flights/:counter', to: "flights#test", as: "flights"
end
