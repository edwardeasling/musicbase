import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReleasesIndex from '../releases/releases_index';

const ArtistDetail = ({ releases, type, artists, fetchReleases }) => {

    const artistId = parseInt(useParams().artistId);
    const artist = artists[artistId];
    const username = artist ? artist.username : "";
    const description = artist ? artist.description : "";
    const photoUrl = artist ? artist.photoUrl : "";

    return(
        <div className="artist-detail">
            <ReleasesIndex releases={releases} type={type} fetchReleases={fetchReleases} artistId={artistId}/>
            <div className="artist-right">
                <img src={photoUrl} />
                <p className="artist-right-username">{username}</p>
                <p className="artist-right-description">{description}</p>
            </div>
        </div>
    )

}

export default ArtistDetail;