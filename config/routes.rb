ProjectTwo::Application.routes.draw do
  root to: 'flights#index'
  get '/flights', to: "flights#test", as: "flights"
end
