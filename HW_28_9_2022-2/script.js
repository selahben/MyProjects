let allUsers = [];

function User(userName) {
  this.userName = userName;
  this.followers = [];
  this.iFollow = [];
  this.wantsToFollow = function (newToFollow) {
    if (this.iFollow.includes(newToFollow)) {
      console.log("You are already following this user");
    } else {
      this.iFollow.push(newToFollow);
      document.querySelector(`#${this.userName} .userFollowing`).innerHTML +=
        newToFollow.userName + " ; ";
      newToFollow.followers.push(this);
      document.querySelector(
        `#${newToFollow.userName} .userFollowers`
      ).innerHTML += this.userName + " ; ";
    }
  };
  this.sendPost = function (myPost) {
    this.followers.forEach((myFollower) => {
      myFollower.receivePost(this.userName, myPost);
    });
  };
  this.receivePost = function (postSender, newPost) {
    document.getElementById(
      this.userName + "Messages"
    ).innerHTML += `<p>A new post from ${postSender}: ${newPost}`;
  };
}

function addUser(userObject, userName) {
  if (!allUsers.includes(userObject)) {
    window[userObject] = new User(userName);
    allUsers.push(window[userObject]);

    createConForUser(window[userObject]);
  }
}

function createConForUser(userObject) {
  let newUserCon = document.createElement("div");
  newUserCon.setAttribute("id", userObject.userName);
  newUserCon.setAttribute("class", "user");

  let newUserTitle = document.createElement("h3");
  newUserTitle.setAttribute("class", "userTitle");
  newUserTitle.innerHTML = userObject.userName;

  let newUserFollowers = document.createElement("p");
  newUserFollowers.setAttribute("class", "userFollowers");
  newUserFollowers.innerHTML = "Followers: ";
  if (userObject.follower != undefined) {
    userObject.followers.forEach((follower) => {
      newUserFollowers.innerHTML += follower.userName + " ; ";
    });
  }

  let newUserFollowing = document.createElement("p");
  newUserFollowing.setAttribute("class", "userFollowing");
  newUserFollowing.innerHTML = "Following: ";
  if (userObject.iFollow != undefined) {
    userObject.iFollow.forEach((userIFollow) => {
      newUserFollowing.innerHTML += userIFollow.userName + " ; ";
    });
  }

  let newUserSendMessage = document.createElement("div");
  newUserSendMessage.setAttribute("class", "userSendMessage");
  let newUserSendMessageLabel = document.createElement("label");
  newUserSendMessageLabel.setAttribute("class", "UserSendMessageLabel");
  newUserSendMessageLabel.setAttribute("for", "SendMessageInput");
  newUserSendMessageLabel.innerHTML = "Send a Message to your Followers:";
  let newUserSendMessageInput = document.createElement("textarea");
  newUserSendMessageInput.setAttribute("class", "UserSendMessageInput");
  newUserSendMessageInput.setAttribute("name", "SendMessageInput");
  newUserSendMessageInput.setAttribute("rows", 5);
  newUserSendMessageInput.setAttribute("placeholder", "Type a Message...");
  let newUserSendMessageSubmit = document.createElement("input");
  newUserSendMessageSubmit.setAttribute("class", "MessageSubmit");
  newUserSendMessageSubmit.setAttribute("type", "submit");
  newUserSendMessageSubmit.setAttribute("value", "Send");
  newUserSendMessageSubmit.addEventListener("click", () => {
    userObject.sendPost(newUserSendMessageInput.value);
  });
  newUserSendMessage.appendChild(newUserSendMessageLabel);
  newUserSendMessage.appendChild(newUserSendMessageInput);
  newUserSendMessage.appendChild(newUserSendMessageSubmit);

  let newUserMessages = document.createElement("div");
  newUserMessages.setAttribute("id", userObject.userName + "Messages");
  newUserMessages.setAttribute("class", "UserMessages");
  newUserMessages.innerHTML = "<h4>Your Messages</h4>";

  newUserCon.appendChild(newUserTitle);
  newUserCon.appendChild(newUserFollowers);
  newUserCon.appendChild(newUserFollowing);
  newUserCon.appendChild(newUserSendMessage);
  newUserCon.appendChild(newUserMessages);

  document.getElementById("users").appendChild(newUserCon);
}

addUser("ben", "Ben");
addUser("harel", "Harel");
addUser("bar", "Bar");
addUser("tzah", "Tzah");

ben.wantsToFollow(tzah);

harel.wantsToFollow(ben);
harel.wantsToFollow(bar);
harel.wantsToFollow(tzah);

bar.wantsToFollow(ben);
bar.wantsToFollow(harel);

tzah.wantsToFollow(ben);

// ben.sendPost("A message to all my followers!");
// console.log("* Ben's followers: ");
// console.log(ben.followers);
// console.log("\n");
// harel.sendPost("A different message to all my followers!");
// console.log("* Harel's followers: ");
// console.log(harel.followers);
// console.log("\n");
// bar.sendPost("Another message to all my followers!");
// console.log("* Bar's followers: ");
// console.log(bar.followers);
// console.log("\n");
// tzah.sendPost("A totally different message to all my followers!");
// console.log("* Tzah's followers: ");
// console.log(tzah.followers);
// console.log("\n");
