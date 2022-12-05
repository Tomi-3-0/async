const OnMyBirthday = function(isKayoSick) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("I am sad"));
            }
        }, 2000);
    })
};
OnMyBirthday(false)
    .then(function(result) {
        console.log(`I have ${result} cakes`);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Party is gonna hold");
    });
OnMyBirthday(true)
    .then(function(result) {
        console.log(`I have ${result} cakes`);
    }).catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Party is holding")
    })