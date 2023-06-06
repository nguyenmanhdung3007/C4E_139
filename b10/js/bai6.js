const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
    {
        name: 'Cầu lông',
        like: 30
    },
    {
        name: 'Đá cầu',
        like: 1
    },
]

// console.log(typeof sports[1].like);

function getMostFavoriteSport(array) {
    let newElement = ""
    let max = 0;
    // console.log(typeof array[0].like);
    for (let i = 0; i < array.length; i++) {
        if (max < array[i].like) {
            max = array[i].like;
            // console.log (max);
            newElement = array[i];
        }
    
    }
    return newElement;
}

console.log(getMostFavoriteSport(sports));