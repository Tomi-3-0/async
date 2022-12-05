const posts = [
    { title: "post one", body: "Tbilisi Med" },
    { title: "post two", body: "Psychiatrist" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
            "<br>"
        })
        document.body.innerHTML = output;
    }, 1000)
};

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            // const error = false;
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('something went wrong');
            }

        }, 2000)
    });

}

// createPosts({ title: "post one", body: "Tbilisi Med" })
//     .then(getPosts)
//     .catch(err => console.log(err))

//getPosts();

//promise.all
const promise1 = Promise.resolve('helloworld');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res.json)

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));