class Api::TracksController < ApplicationController

    def create
        @track = Track.new(track_params)
        if @track.save!
            render :show
        else
            render json: @track.errors.full_messages, status: 401
        end
    end

    def index
        @tracks = Release.find(params[:release_id]).tracks
    end

    # def show
    # end

    # def destroy
    # end

    private
    def track_params
        params.require(:track).permit(:title, :track_no, :release_id, :song)
    end
end
