Rails.application.routes.draw do
  post "/register", to: "auth#register"
  post "/login", to: "auth#login"
  post "/companyregister", to: "auth#register"
  post "/userinfo", to: "auth#register"
  post "/companyinfo", to: "auth#register"
end

