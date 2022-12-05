const onMyBirthday = function(isKayoSick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error('I am sad'));
            }
        }, 2000)

    })
}

console.time('Timer')

onMyBirthday(false).then((value) => {
    console.timeLog('Timer')
    console.log(`I have ${value} cakes`)
}).catch((error) => {
    console.timeLog('Timer')
    console.log(error)
}).finally(() => {
    console.log('I still have my party')
})