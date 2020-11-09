
export function randomInteger(min, max) {
    return Math.floor(Math.random() * ((max) - min) + min);
}

export function randomGender() {
    const gender = ["male", "female"];
    return gender[Math.round(Math.random())];
}

export function randomStarter() {
    const gender = ["opponent", "your-pokemon"];
    return gender[Math.round(Math.random())];
}