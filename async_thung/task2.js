//guessing game

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt('Enter a number from 1 -6'));
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        if (isNaN(userNumber)) {
            reject(new Error("wrong input type"))
        }
        if (userNumber === randomNumber) {
            resolve({
                points: 2,
                randomNumber,
            })
        } else if (userNumber === randomNumber + 1 || userNumber === randomNumber - 1) {
            resolve({
                points: 1,
                randomNumber,
            })
        } else {
            resolve({
                points: 0,
                randomNumber,
            })
        }
    })
}

const continuegame = () => {
        return new Promise((resolve, reject) => {
            if (window.confirm('Do you want to continue?')) {
                resolve(true);
            } else {
                resolve(false)
            }
        })
    }
    // const handleGuess = () => {
    //     enterNumber()
    //         .then((result) => {
    //             alert(`Dice: ${result.randomNumber}: you got ${result.points}`)
    //         });

//     continuegame().then((result) => {
//             if (result) {
//                 handleGuess();
//             } else {
//                 alert("Game ends")
//             }
//         })
//         .catch((error) => alert(error))
// }

const handleGuess = async() => {
    try {
        const result = await enterNumber();
        alert(`Dice: ${result.randomNumber}: you got ${result.points}`);
        const isContinuing = await continuegame();
        if (isContinuing) {
            handleGuess();
        } else {
            alert('game ends')
        }
    } catch (error) {
        alert(error)
    }

}



const start = () => {
    handleGuess();

};

start()