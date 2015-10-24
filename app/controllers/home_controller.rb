class HomeController < ApplicationController
  before_filter :authenticate_user!

  def index
  end

  def get_location_url
    key = "ecd6220d5ae51a40";
    url = "http://api.wunderground.com/api/#{key}/conditions/q/CL/#{current_user.location.address}.json"
    render text: url
  end
end
