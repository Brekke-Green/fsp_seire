# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#            api_user_route PATCH  /api/users/:user_id/routes/:id(.:format)                                                 api/routes#update {:format=>:json}
#                           PUT    /api/users/:user_id/routes/:id(.:format)                                                 api/routes#update {:format=>:json}
#         api_user_workouts POST   /api/users/:user_id/workouts(.:format)                                                   api/workouts#create {:format=>:json}
#          api_user_workout GET    /api/users/:user_id/workouts/:id(.:format)                                               api/workouts#show {:format=>:json}
#                           PATCH  /api/users/:user_id/workouts/:id(.:format)                                               api/workouts#update {:format=>:json}
#                           PUT    /api/users/:user_id/workouts/:id(.:format)                                               api/workouts#update {:format=>:json}
#                           DELETE /api/users/:user_id/workouts/:id(.:format)                                               api/workouts#destroy {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                api_routes GET    /api/routes(.:format)                                                                    api/routes#index {:format=>:json}
#                           POST   /api/routes(.:format)                                                                    api/routes#create {:format=>:json}
#                 api_route GET    /api/routes/:id(.:format)                                                                api/routes#show {:format=>:json}
#                           DELETE /api/routes/:id(.:format)                                                                api/routes#destroy {:format=>:json}
#              api_workouts GET    /api/workouts(.:format)                                                                  api/workouts#index {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do
      resources :routes, only: [:update]
      resources :workouts, only: [:create, :show, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :index, :destroy, :show]
    resources :workouts, only: [:index]
  end

end
