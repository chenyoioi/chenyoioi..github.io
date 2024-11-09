var posts=["posts/2/","posts/1/","posts/3/","posts/4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };