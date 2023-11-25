export function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

export function getImagePath(object) {
    return (
        '/images/' +
        object.fileName +
        object.fileExtension
    );
}