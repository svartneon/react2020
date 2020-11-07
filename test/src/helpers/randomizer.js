
export function randomInteger(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

export function randomGender() {
    const gender = ["male", "female"];
    return gender[randomInteger(1, 0)];
}