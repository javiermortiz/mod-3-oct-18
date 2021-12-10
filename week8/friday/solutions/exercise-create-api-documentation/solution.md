# Exercise: API Endpoints Solution

- Get all the posts
  - `GET /posts`
- Create a new post   `GET /posts/new'   HTML form to create the post   <form action="/posts" method="post">
  - `POST /posts`
- Edit a post     
  - `PUT /posts/:postId`       {postId: 1, title: 'Hello world!', body: 'This is my post'}     {title: 'Hello!', body: 'This is my post'}
  - `PATCH /posts/:postId`     {postId: 1, title: 'Hello world!', body: 'This is my post'}     {title: 'Hello!}
- Create a new user
  - `POST /users`
- Get the comments for a post
  - `GET /posts/:postId/comments`
- Create a comment for a post
  - `POST /posts/:postId/comments`
- Edit a comment for a post
  - `PUT /comments/:commentId`
  - `PATCH /comments/:commentId`
- Delete a comment for a post
  - `DELETE /comments/:commentId`
  Comment.findByPk(:commentId)
  {commentId: 1, body: "This is my comment"}
- Add a like for a post
  - `POST /posts/:postId/like`
- Remove a like for a post
  - `DELETE /posts/:postId/like`
- Get all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `GET /posts/search`
  - `POST /posts/search`
