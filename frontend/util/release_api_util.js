export const createRelease = (release, artistId) => (
    $.ajax({
        method: 'POST',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/users/${artistId}/releases`,
        data: release,
        processData: false,
        contentType: false
    })
);

export const getRandomReleases = (numberOfReleases) => (
    $.ajax({
        method: 'GET',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/releases`,
        data: { numberOfReleases: numberOfReleases }
    })
);

export const getUserReleases = (userId) => (
    $.ajax({
        method: 'GET',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/users/${userId}/releases`,
    })
);

export const getSingleRelease = (releaseId) => (
    $.ajax({
        method: 'GET',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/releases/${releaseId}`,
    })
);

// rel = { release: { title: 'Old Timez', year: 1982, label: 'Hillbilly Folk Records', price: 1000, artist_id: 1, release_type: 'album' }}