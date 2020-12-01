class Api::ReleasesController < ApplicationController

    def create
        @release = Release.new(release_params)
        if @release.save!
            render :show
        else
            render json: @release.errors.full_messages, status: 401
        end
    end

    def index
        if params[:user_id] 
            @releases = Release.where(artist_id: params[:user_id]).includes(:artist)
        elsif params[:searchText]
            @releases = Release.joins(:artist).where("title ILIKE ? OR genre ILIKE ? OR username ILIKE ?", "%#{params[:searchText]}%", "%#{params[:searchText]}%", "%#{params[:searchText]}%") 
        elsif
            @releases = Release.order_by_rand.limit(params[:numberOfReleases]).all.includes(:artist)
        end
        render :index
    end

    def show
        @release = Release.find(params[:id])
    end

    private
    def release_params
        params.require(:release).permit(:title, :year, :artist_id, :release_type, :label, :price, :genre, :photo)
    end
end
