export const createTrack = (track) => (
    $.ajax({
        method: 'POST',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/tracks`,
        data: track,
        processData: false,
        contentType: false
    })
);

export const getTracks = (releaseId) => (
    $.ajax({
        method: 'GET',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/releases/${releaseId}/tracks`
    })
);

// let newTrack = { track: { title: 'track 3', track_no: 3, release_id: 9}} 