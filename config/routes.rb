ProjectTwo::Application.routes.draw do
  devise_for :administrators

  root to: 'flights#index'
  get '/flights', to: "flights#test", as: "flights"
end
