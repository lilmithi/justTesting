Rails.application.routes.draw do
  resources :admins, only: [:index, :create, :show, :destroy]
  resources :event_sponsors, only: [:index, :create, :show, :destroy]
  resources :sponsors, only: [:create, :index, :show, :destroy]
  resources :contacts, only: [:create, :index, :show, :destroy]
  resources :event_images, only: [:index, :create, :show, :destroy]
  resources :event_entertainers, only: [:index, :create, :show, :destroy]
  resources :events, only: [:index, :create, :show, :update, :destroy]
  resources :entertainers, only: [:index, :create, :show, :destroy]
  resources :locations, only: [:create, :index, :show, :destroy]
  resources :comments, only: [:index, :create, :show, :destroy]
  resources :tickets, only: [:index, :create, :show, :destroy]
  resources :clients, only: [:create, :show, :index, :update, :destroy]

  post "/login", to: "sessions#create"
  post "/signup", to: "clients#create"
  get "/me", to: "clients#show"
  delete "/logout", to: "sessions#destroy"
  
  post "/admin/login", to: "admin_sessions#create"
  delete "/admin/logout", to: "admin_sessions#destroy"
  get "/admin/me", to: "admins#show"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
