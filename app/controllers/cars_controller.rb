class CarsController < ApplicationController
  def index
    # binding.pry
    if params[:search].present?
      @cars = Car.search params[:search]

      respond_to do |format|
        format.html
        format.json { render json: @cars }
      end 
    else
      @cars = Car.all
      respond_to do |format|
        format.html
        format.json { render json: @cars}
      end 
    end
  end
end
