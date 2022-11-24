let numOfPosts = 3;
let allData = [];

let allPosts = new Promise((resolve) => {
  let allThePosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  resolve(allThePosts);
});
let allComments = new Promise((resolve) => {
  let allTheComments = fetch(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((response) => response.json());
  resolve(allTheComments);
});

function printToHTML() {
  let myMain = document.getElementById("main");
  allData[0].forEach((post, postsIndex) => {
    let newPostDiv = document.createElement("div");
    newPostDiv.setAttribute("id", `post${postsIndex + 1}`);
    newPostDiv.setAttribute("class", `myPost`);

    let newPostTitle = document.createElement("h2");
    newPostTitle.innerHTML = `Post ${postsIndex + 1}: ${post.title}`;

    let newPostBody = document.createElement("p");
    newPostBody.innerHTML = `Post Body: ${post.body}`;

    newPostDiv.appendChild(newPostTitle);
    newPostDiv.appendChild(newPostBody);

    newPostDiv.innerHTML += "<h3>Comments</h3>";

    let relevantComments = allData[1].filter(
      (comment) => comment.postId == postsIndex + 1
    );
    relevantComments.forEach((comment) => {
      let newCommentDiv = document.createElement("div");
      newCommentDiv.setAttribute("class", `myComment`);

      let newCommentId = document.createElement("p");
      newCommentId.innerHTML = `Comment to: Post${comment.postId}`;
      newCommentDiv.appendChild(newCommentId);

      let newCommentName = document.createElement("p");
      newCommentName.innerHTML = `Name: ${comment.name}`;
      newCommentDiv.appendChild(newCommentName);

      let newCommentEmail = document.createElement("p");
      newCommentEmail.innerHTML = `Email: ${comment.email}`;
      newCommentDiv.appendChild(newCommentEmail);

      let newCommentBody = document.createElement("p");
      newCommentBody.innerHTML = `Comment Body: ${comment.body}`;
      newCommentDiv.appendChild(newCommentBody);

      newPostDiv.appendChild(newCommentDiv);
    });
    myMain.appendChild(newPostDiv);
  });
}

allPosts
  .then((posts) => {
    allData.push(posts.filter((post) => post.id <= numOfPosts));
    return allComments;
  })
  .then((comments) =>
    allData.push(comments.filter((comment) => comment.postId <= numOfPosts))
  )
  .then(printToHTML);
