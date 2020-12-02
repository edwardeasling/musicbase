# MusicBase

### Overview
MusicBase is a Bandcamp clone, designed to allow artists to easily share their music with the public. Artists can create an account, make a profile page, and upload their releases. Users can navigate releases randomly, by artist page, or by searching for specific terms. When a user opens a release page they can listen to the tracks, read release information, and view artwork.

The app is live and accessible at https://musicbaseapp.herokuapp.com/

#### UI example: Page for navigating releases
![](/images/musicbase-1.png)

#### UI example: Page for an individual release
![](/images/musicbase-2.png)

### Technologies Used
The backend is built on Rails. It manages a PostgreSQL database of objects (artists, releases, tracks), which are served as JSON objects to the frontend upon request. Image and audio files are stored externally on AWS and managed with ActiveStorage

The frontend is built on React and Redux. It is a single-page application. It manages state for authentication, artists, releases, and tracks. Data is exchanged with the backend via AJAX requests

### Challenges / lessons from building the app
One challenge I hadn't faced before was storing image and audio files on an external server. I learned that Rails has a feature called ActiveStorage that helps you to upload files to cloud storage providers such as AWS. To set this up, I had to set up some free storage on Amazon S3, create new associations for my Rails models, make changes to my controllers, and edit my upload forms to allow users to attach files. Uploading file data to Rails required me to use a new type of data object (a FormData object).

#### Code example: Uploading audio files via a form
```javascript
// input with type "file" is included in the form
<input className="form-input" type="file" onChange={handleFile} />

// function for extracting the file from the event
const handleFile = (e) => {
        e.preventDefault();
        setSongFile(e.currentTarget.files[0]);
    }

// function for creating a FormData object and submitting it
const handleSubmit = (e) => {
        e.preventDefault();
        const newTrack = new FormData();
        newTrack.append('track[title]', title)
        newTrack.append('track[track_no]', track_no)
        newTrack.append('track[release_id]', release_id)
        newTrack.append('track[song]', songFile)
        createNewTrack(newTrack).then(() => history.push(`/releases/${paramsReleaseId}`));
    } 
```

Another new challenge was playing audio files in the browser. I learned that there was a React package named ReactAudioPlayer which lets you easily add an audio player interface to a webpage. When I first implemented this, it automatically downloaded all tracks in a release when the page loaded (i.e. if there were 12 songs on an album, it downloaded all 12 tracks). It was clear that this was too bandwidth-intensive, so I changed it to only load an audio player when a track is clicked on by the user.

#### Code example: Inserting an audio player when a track is clicked
```javascript
// tracks are rendered with with an onClick listener
<li className="track-table-item">
    <strong className="play-button" onClick={addPlayer}>{String.fromCharCode(9654)}</strong>   {track.track_no}.   {track.title}
</li>

// function for adding an Audio Player to the state
const addPlayer = () => setPlayer(
        <ReactAudioPlayer
            src={track.songUrl}
            controls
            className="audio-player"
            autoPlay
        />
    )
```