Rails.application.routes.draw do
	resources :list
	root to: "list#index"
end
