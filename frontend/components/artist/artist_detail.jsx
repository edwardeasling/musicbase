import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReleasesIndex from '../releases/releases_index';

const ArtistDetail = ({ releases, type, artists, fetchReleases }) => {

    const artistId = parseInt(useParams().artistId);
    const artist = artists[artistId];
    const username = artist ? artist.username : "";
    const description = artist ? artist.description : "";

    return(
        <div className="artist-detail">
            <ReleasesIndex releases={releases} type={type} fetchReleases={fetchReleases} artistId={artistId}/>
            <div className="artist-right">
                <img src="https://townsquare.media/site/838/files/2015/12/kingkhanbbq.jpg?w=980&q=75" />
                <p className="artist-right-username">{username}</p>
                <p className="artist-right-description">{description}</p>
            </div>
        </div>
    )

}

export default ArtistDetail;