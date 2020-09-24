export const createUser = (user) => (
    $.ajax({
        method: 'POST',
        headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
        },
        url: `/api/users/`,
        data: user
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

// let testUser = { user: { username: 'petermatera', password: 'abcdef', email: 'peter@gmail.com'}}