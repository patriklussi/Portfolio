
export const generateId = () => {
    const id = crypto.randomUUID();
    console.log(id);
}

export const generateColor = () => {
    const hue = Math.floor(Math.random() * 30) * 12;
    console.log(hue);
}
console.log(generateId());