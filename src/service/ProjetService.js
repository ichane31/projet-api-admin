const header = new Headers({
    'Accept': 'application/json'
});

export async function GetProjet() {
    const response = await fetch('https://projet-apis.herokuapp.com/api/v1/projet');
    const courses = await response.json();
    return courses;
}

export async function GetCourseItem(id) {
    const response = await fetch(`https://projet-apis.herokuapp.com/api/v1/projet/${id}/list`);
    const courses = await response.json();
    return courses;
}

export async function PostCourse(newCourse) {
    return await fetch('https://projet-apis.herokuapp.com/api/v1/projet', newCourse);
}

export async function PutCourse(id, modifieCourse) {
    return await fetch(`https://projet-apis.herokuapp.com/api/v1/projet/${id}`, modifieCourse);
}

export async function DelCourse(id) {
    return await fetch(`https://projet-apis.herokuapp.com/api/v1/projet/${id}`, { method: 'DELETE' });
}