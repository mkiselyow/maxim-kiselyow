Rails.application.routes.draw do
  root to: "pages#landing_page_example"

  get '/landing_page_example' => 'pages#landing_page_example'
  get '/adaptive_landing_page_example' => 'pages#adaptive_landing_page_example'
end
