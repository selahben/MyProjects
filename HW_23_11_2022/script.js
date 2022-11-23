let numOfPosts = 3;

let allPosts = new Promise((resolve) => {
  allposts = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  resolve(allposts);
});
let allComments = new Promise((resolve) => {
  allcomments = fetch("https://jsonplaceholder.typicode.com/comments").then(
    (response) => response.json()
  );
  resolve(allcomments);
});

function printPostsToHTML(posts) {
  let myPosts = posts.filter((post) => post.id <= numOfPosts);

  myPosts.forEach((post, index) => {
    let newPostDiv = document.createElement("div");
    newPostDiv.setAttribute("id", `post${index + 1}`);
    newPostDiv.setAttribute("class", `myPost`);

    let newPostTitle = document.createElement("h2");
    newPostTitle.innerHTML = `Post ${index + 1}: ${post.title}`;

    let newPostBody = document.createElement("p");
    newPostBody.innerHTML = `Post Body: ${post.body}`;

    newPostDiv.appendChild(newPostTitle);
    newPostDiv.appendChild(newPostBody);
    document.getElementById("main").appendChild(newPostDiv);
  });
  return allComments;
}
function printCommentsToHTML(comments) {
  let myComments = comments.filter((comment) => comment.postId <= numOfPosts);
  for (let postNum = 1; postNum <= numOfPosts; postNum++) {
    let commentDiv = document.getElementById(`post${postNum}`);
    commentDiv.innerHTML += "<h3>Comments</h3>";

    myComments.forEach((comment, index) => {
      if (comment.postId == postNum) {
        let newCommentDiv = document.createElement("div");
        newCommentDiv.setAttribute("class", `myComment`);

        let newCommentName = document.createElement("p");
        newCommentName.innerHTML = `Name: ${comment.name}`;
        newCommentDiv.appendChild(newCommentName);

        let newCommentEmail = document.createElement("p");
        newCommentEmail.innerHTML = `Email: ${comment.email}`;
        newCommentDiv.appendChild(newCommentEmail);

        let newCommentBody = document.createElement("p");
        newCommentBody.innerHTML = `Comment Body: ${comment.body}`;
        newCommentDiv.appendChild(newCommentBody);

        commentDiv.appendChild(newCommentDiv);
      }
    });
  }
}

allPosts
  .then((posts) => printPostsToHTML(posts))
  .then((comments) => printCommentsToHTML(comments));
