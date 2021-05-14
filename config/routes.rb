Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do
      resources :routes, only: [:update, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :destroy, :show]
  end

end
