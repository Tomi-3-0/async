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

async function init() {
    await createPosts({ title: "post three", body: "Started studying" }, getPosts);

    getPosts();
}
init();

//Async await with fetch
async function fetchUsers() {
    const res = await fetch('https: //jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}
fetchUsers();