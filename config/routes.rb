Rails.application.routes.draw do
    root to: "static_pages#root"
    namespace :api, defaults: {format: :json} do 
      resource :session, only: [:create, :destroy]
      resources :users, only: [:show, :create, :index]
      resources :objectives, only: [:show, :update, :index, :destroy] do 
        resources :tasks, only: [:index, :destroy, :update]
      end 
    end
end
