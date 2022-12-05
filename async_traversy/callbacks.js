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

function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

//getPosts();

createPosts({ title: "post three", body: "Started studying" }, getPosts);