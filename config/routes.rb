ProjectTwo::Application.routes.draw do
  devise_for :administrators

  devise_for :admins

  root to: 'flights#index'
  get '/flights', to: "flights#test", as: "flights"
end
