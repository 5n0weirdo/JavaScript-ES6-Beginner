let post = new CreatePost("Web testing", "Snow", "Tools" );

console.log(post);

function CreatePost(title, author, body) {
  this.title = title;
  this.author = author;
  this.body = body;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
