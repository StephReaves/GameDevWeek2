# Require config/environment.rb
require ::File.expand_path('../config/environment', _FILE_)

set :app_file, _FILE_

run Sinatra::Application