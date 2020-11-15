export const getArtist = (userId) => (
    $.ajax({
        method: 'GET',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/users/${userId}`,
    })
);