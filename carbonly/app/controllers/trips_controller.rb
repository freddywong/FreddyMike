class TripsController < ApplicationController
  before_action :find_trip, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  layout :trips_list_layout

  def index
    @trips = Trip.all

    respond_to do |format|
      format.html
      format.json { render json: @trips}
    end 
  end

  def show
    respond_to do |format|
    format.html
    format.json { render json: @trip}
    end
  end

  def new
    @trip = Trip.new
  end

  def create
    @trip = Trip.new trip_params
    @trip.user_id = current_user.id 
    if @trip.save
      redirect_to @trip
    else
      render :new
    end
  end

  def edit

  end

  def update
    if @trip.update trip_params
      redirect_to @trip
    else
      render :edit
    end
  end

  def destroy
    @trip.destroy
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: {status: "ok"} }
    end 
  end

  private
  def find_trip
    @trip = Trip.find params[:id]
  end


  def trips_list_layout
    user_signed_in? ? "demo" : "trips"
  end

  def trip_params
    params.require(:trip).permit(:origin, :destination, :days, :time_period)
  end

end
