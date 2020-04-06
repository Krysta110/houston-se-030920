require_relative './config/environment'
use ApplicationController
use FeedingTimeController
use BreedController
run Sinatra::Application