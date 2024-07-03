Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root 'pages#home'
  
  # Catch-all route for React SPA
  # This routes all non-AJAX and non-API requests to 'pages#home', allowing React Router to handle routing.
  get '*path', to: 'pages#home', constraints: ->(request) { !request.xhr? && request.format.html? }
end
