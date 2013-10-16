ProjectTwo::Application.routes.draw do
  devise_for :administrators

  root to: 'flights#index'
  get '/flights/:counter', to: "flights#test", as: "flights"
  match '*path' => redirect('/') #  unless Rails.env.development?
end
