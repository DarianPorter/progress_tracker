Rails.application.routes.draw do
    root to: "static_pages#root"
    namespace :api, defaults: {format: :json} do 
      resource :session, only: [:create, :destroy]

      resources :users, only: [:show, :create, :index]

      resources :tasks, only: [:index]

      resources :objectives, only: [:update, :index, :create, :destroy] do 
        resources :tasks, only: [:destroy, :update]
      end 
    end
end
