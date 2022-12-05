function sendErrorReport(error) {
    console.error(`Hey admin, an error occured: "${error}".`)
    return new Promise(resolve =>
        setTimeout(resolve, Math.random() * 1000)
    )
}

// Create a failed promise to simulate a failed task
Promise.reject("Oh no.")
    .catch(error => {
        // Oh no, an error occured. Let's notify the admin.
        return sendErrorReport(error)
    })
    .then(
        // Finally, let's notify the user of how the task went.
        message => {
            // Uh... but the task didn't succeed, so why are we here?
            console.log("Success!")
        },
        message => {
            console.error("Failed :-(")
        }
    )