export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

export function getImagePath(person) {
    return (
        './src/images/' +
        person.fileName +
        '.jpg'
    );
}