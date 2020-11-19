export const createUser = (user) => (
    $.ajax({
        method: 'POST',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/users/`,
        data: user,
        processData: false,
        contentType: false
    })
);

export const createSession = (user) => (
    $.ajax({
        method: 'POST',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/session/`,
        data: user
    })
);

export const destroySession = () => (
    $.ajax({
        method: 'DELETE',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/session/`,
    })
);