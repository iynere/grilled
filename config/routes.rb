Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:index, :show]
    resources :conversations, only: [:index, :show, :update]

    resources :users, only: :create
    resource :session, only: [:create, :destroy]
  end

  get '*page' => 'static_pages#root'
end
