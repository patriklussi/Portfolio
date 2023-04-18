
export const generateId = () => {
    const id = crypto.randomUUID();
    console.log(id);
}

console.log(generateId());