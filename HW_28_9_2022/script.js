function User(userName) {
  this.userName = userName;
  this.followers = [];
  this.iFollow = [];
  this.wantsToFollow = function (newToFollow) {
    if (this.iFollow.includes(newToFollow)) {
      console.log("You are already following this user");
    } else {
      this.iFollow.push(newToFollow);
      newToFollow.followers.push(this);
    }
  };
  this.sendPost = function (myPost) {
    this.followers.forEach((myFollower) => {
      myFollower.receivePost(this.userName, myPost);
    });
  };
  this.receivePost = function (postSender, newPost) {
    console.log(
      this.userName + " received this post from " + postSender + ": " + newPost
    );
  };
}

let ben = new User("Ben");
let harel = new User("Harel");
let bar = new User("Bar");
let tzah = new User("Tzah");

ben.wantsToFollow(tzah);

harel.wantsToFollow(ben);
harel.wantsToFollow(bar);
harel.wantsToFollow(tzah);

bar.wantsToFollow(ben);
bar.wantsToFollow(harel);

tzah.wantsToFollow(ben);

ben.sendPost("A message to all my followers!");
console.log("* Ben's followers: ");
console.log(ben.followers);
console.log("\n");
harel.sendPost("A different message to all my followers!");
console.log("* Harel's followers: ");
console.log(harel.followers);
console.log("\n");
bar.sendPost("Another message to all my followers!");
console.log("* Bar's followers: ");
console.log(bar.followers);
console.log("\n");
tzah.sendPost("A totally different message to all my followers!");
console.log("* Tzah's followers: ");
console.log(tzah.followers);
console.log("\n");
