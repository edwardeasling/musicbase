export const createRelease = (release, artistId) => (
    $.ajax({
        method: 'POST',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/users/${artistId}/releases`,
        data: release
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

// rel = { release: { title: 'Old Times', year: 1982, label: 'Hillbilly Folk Records', price: 1000, artist_id: 1, release_type: 'album' }}