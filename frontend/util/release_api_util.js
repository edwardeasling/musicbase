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

export const searchReleases = (searchText) => (
    $.ajax({
        method: 'GET',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/releases`,
        data: { searchText: searchText }
    })
);