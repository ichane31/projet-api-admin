export async function GetUsers() {
    return await fetch('https://projet-apis.herokuapp.com/api/v1/user');
}

export async function DelUser(id) {
    return await fetch(`https://projet-apis.herokuapp.com/api/v1/user/${id}`, { method: 'DELETE' });
}