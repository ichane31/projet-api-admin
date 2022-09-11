export async function GetUsers() {
    return await fetch('https://projet-apis.herokuapp.com/api/v1/user');
}

export async function DelUser(id) {
    return await fetch(`https://projet-apis.herokuapp.com/api/v1/user/${id}`, { method: 'DELETE' });
}

export async function ActiveUsers () {
    return await fetch(`https://projet-apis.herokuapp.com/api/v1/user/active`);
}

export async function UsersJoinedToday(token) {
    return await fetch(`https://lablib-api.herokuapp.com/api/v1/user/joined/today`);
}

export async function UsersJoinedCurrentMonth() {
    return await fetch(`https://lablib-api.herokuapp.com/api/v1/user/joined/month`);
}

export async function GetMeDetails(token) {
    return await fetch('https://lablib-api.herokuapp.com/api/v1/user/me/details' , {
    headers: {
        'Authorization': `Bearer ${token}` 
    } });
}