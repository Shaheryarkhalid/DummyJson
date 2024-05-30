#       													 All API End Points

## Auth 
* Modules : User Login, Current Authenticated User, Refresh Auth Token
* URL :  /auth/

### - User Login 
* Parameters must include Email and Password 

* Will compare provided values with user values in User.json in Data Folder

* Will return Authorization Token

* Auth Token will have expiry time of 59 minutes.

```
POST http://localhost:8080/auth/login
Content-Type : application/json

{
	"Email" : "emily.johnson@x.dummyjson.com",
	"Password" : "emilyspass" 
}
```
### - Current Authenticated User
* Authorization parameter in request must include Bearer followed by Authorization Token 
* Athorization token  will Provided as a return value from login(if Successful) or Refresh Token 
```
GET http://localhost:8080/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJtYWlkZW5OYW1lIjoiU21pdGgiLCJhZ2UiOjI4LCJnZW5kZXIiOiJmZW1hbGUiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwicGhvbmUiOiIrODEgOTY1LTQzMS0zMDI0IiwidXNlcm5hbWUiOiJlbWlseXMiLCJwYXNzd29yZCI6ImVtaWx5c3Bhc3MiLCJiaXJ0aERhdGUiOiIxOTk2LTUtMzAiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJibG9vZEdyb3VwIjoiTy0iLCJoZWlnaHQiOjE5My4yNCwid2VpZ2h0Ijo2My4xNiwiZXllQ29sb3IiOiJHcmVlbiIsImhhaXIiOnsiY29sb3IiOiJCcm93biIsInR5cGUiOiJDdXJseSJ9LCJpcCI6IjQyLjQ4LjEwMC4zMiIsImFkZHJlc3MiOnsiYWRkcmVzcyI6IjYyNiBNYWluIFN0cmVldCIsImNpdHkiOiJQaG9lbml4Iiwic3RhdGUiOiJNaXNzaXNzaXBwaSIsInN0YXRlQ29kZSI6Ik1TIiwicG9zdGFsQ29kZSI6IjI5MTEyIiwiY29vcmRpbmF0ZXMiOnsibGF0IjotNzcuMTYyMTMsImxuZyI6LTkyLjA4NDgyNH0sImNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIn0sIm1hY0FkZHJlc3MiOiI0NzpmYTo0MToxODplYzplYiIsInVuaXZlcnNpdHkiOiJVbml2ZXJzaXR5IG9mIFdpc2NvbnNpbi0tTWFkaXNvbiIsImJhbmsiOnsiY2FyZEV4cGlyZSI6IjAzLzI2IiwiY2FyZE51bWJlciI6IjkyODk3NjA2NTU0ODE4MTUiLCJjYXJkVHlwZSI6IkVsbyIsImN1cnJlbmN5IjoiQ05ZIiwiaWJhbiI6IllQVVhJU09CSTdUVEhQSzJCUjNIQUlYTCJ9LCJjb21wYW55Ijp7ImRlcGFydG1lbnQiOiJFbmdpbmVlcmluZyIsIm5hbWUiOiJEb29sZXksIEtvemV5IGFuZCBDcm9uaW4iLCJ0aXRsZSI6IlNhbGVzIE1hbmFnZXIiLCJhZGRyZXNzIjp7ImFkZHJlc3MiOiIyNjMgVGVudGggU3RyZWV0IiwiY2l0eSI6IlNhbiBGcmFuY2lzY28iLCJzdGF0ZSI6Ildpc2NvbnNpbiIsInN0YXRlQ29kZSI6IldJIiwicG9zdGFsQ29kZSI6IjM3NjU3IiwiY29vcmRpbmF0ZXMiOnsibGF0Ijo3MS44MTQ1MjUsImxuZyI6LTE2MS4xNTAyNjN9LCJjb3VudHJ5IjoiVW5pdGVkIFN0YXRlcyJ9fSwiZWluIjoiOTc3LTE3NSIsInNzbiI6IjkwMC01OTAtMjg5IiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC45MyBTYWZhcmkvNTM3LjM2IiwiY3J5cHRvIjp7ImNvaW4iOiJCaXRjb2luIiwid2FsbGV0IjoiMHhiOWZjMmZlNjNiMmE2YzAwM2YxYzMyNGMzYmZhNTMyNTkxNjIxODFhIiwibmV0d29yayI6IkV0aGVyZXVtIChFUkMyMCkifSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE2NjU3NDc5LCJleHAiOjE3MTY2NjEwMTl9.uKQQ-VzvFqAAlgUF6_QgcKHTfb27JJabAVcuQOzRSZI
```
### - Refresh Auth Token
* Must include Previous Auth Token in Authorization parameter in request header
* Will reutrn new Auth token
* New returned Auth Token will have expiry time of 59 minutes.
```
POST http://localhost:8080/auth/refresh
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJtYWlkZW5OYW1lIjoiU21pdGgiLCJhZ2UiOjI4LCJnZW5kZXIiOiJmZW1hbGUiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwicGhvbmUiOiIrODEgOTY1LTQzMS0zMDI0IiwidXNlcm5hbWUiOiJlbWlseXMiLCJwYXNzd29yZCI6ImVtaWx5c3Bhc3MiLCJiaXJ0aERhdGUiOiIxOTk2LTUtMzAiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJibG9vZEdyb3VwIjoiTy0iLCJoZWlnaHQiOjE5My4yNCwid2VpZ2h0Ijo2My4xNiwiZXllQ29sb3IiOiJHcmVlbiIsImhhaXIiOnsiY29sb3IiOiJCcm93biIsInR5cGUiOiJDdXJseSJ9LCJpcCI6IjQyLjQ4LjEwMC4zMiIsImFkZHJlc3MiOnsiYWRkcmVzcyI6IjYyNiBNYWluIFN0cmVldCIsImNpdHkiOiJQaG9lbml4Iiwic3RhdGUiOiJNaXNzaXNzaXBwaSIsInN0YXRlQ29kZSI6Ik1TIiwicG9zdGFsQ29kZSI6IjI5MTEyIiwiY29vcmRpbmF0ZXMiOnsibGF0IjotNzcuMTYyMTMsImxuZyI6LTkyLjA4NDgyNH0sImNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIn0sIm1hY0FkZHJlc3MiOiI0NzpmYTo0MToxODplYzplYiIsInVuaXZlcnNpdHkiOiJVbml2ZXJzaXR5IG9mIFdpc2NvbnNpbi0tTWFkaXNvbiIsImJhbmsiOnsiY2FyZEV4cGlyZSI6IjAzLzI2IiwiY2FyZE51bWJlciI6IjkyODk3NjA2NTU0ODE4MTUiLCJjYXJkVHlwZSI6IkVsbyIsImN1cnJlbmN5IjoiQ05ZIiwiaWJhbiI6IllQVVhJU09CSTdUVEhQSzJCUjNIQUlYTCJ9LCJjb21wYW55Ijp7ImRlcGFydG1lbnQiOiJFbmdpbmVlcmluZyIsIm5hbWUiOiJEb29sZXksIEtvemV5IGFuZCBDcm9uaW4iLCJ0aXRsZSI6IlNhbGVzIE1hbmFnZXIiLCJhZGRyZXNzIjp7ImFkZHJlc3MiOiIyNjMgVGVudGggU3RyZWV0IiwiY2l0eSI6IlNhbiBGcmFuY2lzY28iLCJzdGF0ZSI6Ildpc2NvbnNpbiIsInN0YXRlQ29kZSI6IldJIiwicG9zdGFsQ29kZSI6IjM3NjU3IiwiY29vcmRpbmF0ZXMiOnsibGF0Ijo3MS44MTQ1MjUsImxuZyI6LTE2MS4xNTAyNjN9LCJjb3VudHJ5IjoiVW5pdGVkIFN0YXRlcyJ9fSwiZWluIjoiOTc3LTE3NSIsInNzbiI6IjkwMC01OTAtMjg5IiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC45MyBTYWZhcmkvNTM3LjM2IiwiY3J5cHRvIjp7ImNvaW4iOiJCaXRjb2luIiwid2FsbGV0IjoiMHhiOWZjMmZlNjNiMmE2YzAwM2YxYzMyNGMzYmZhNTMyNTkxNjIxODFhIiwibmV0d29yayI6IkV0aGVyZXVtIChFUkMyMCkifSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE2NjU3NDc5LCJleHAiOjE3MTY2NjEwMTl9.uKQQ-VzvFqAAlgUF6_QgcKHTfb27JJabAVcuQOzRSZI
```

## Carts
* Modules : All Carts, Single Cart, Carts by User, Add Cart, Update Cart, Delete Cart
* URL : /Carts/

### - All Carts
* Will return first carts 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
```
GET http://localhost:8080/Carts/
```

### - Single Cart
* Will return one Cart requested by ID

```
GET http://localhost:8080/Carts/c/1
```

### - Carts by User
* Will return Carts for the user requested in UserID
```
GET http://localhost:8080/Carts/user/23
```

### - Add Cart
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters {total : "number", discountedTotal : "number", userId : "number", totalProducts : "number", totalQuantity : "number", products: "array"}
```
POST http://localhost:8080/Carts/add
Content-Type: application/json
{
	"total" : 0, 
	"discountedTotal" : 0,
	"userId" : 0, 
	"totalProducts" : 0, 
	"totalQuantity" : 0, 
	"products": []	
}
```
### - Update Cart
* Must be one of the mentioned parameters. And must have same data type
* Parameters {total : "number", discountedTotal : "number", userId : "number", totalProducts : "number", totalQuantity : "number", products: "array"}
```
PUT http://localhost:8080/Carts/c/1
Content-Type: application/json

{
	"total" : 223
}
```

### - Delete Cart

```
DELETE  http://localhost:8080/Carts/c/1
```

## Comments
* Modules : All Comments, Single Comment, Comment by Post, Add Comment, Update Comment, Delete Comment
* URL : /comments/

### All Comments
* Will return first comment 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}

```
GET http://localhost:8080/comments
```

### Single Comment
* Will return one Comment requested by ID

```
GET http://localhost:8080/comments/c/123
```

### Comment by Post
* Will return Comment for the Post requested in PostID

```
GET http://localhost:8080/comments/post/40
```

### Add Comment
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters : { body : "string", postId : "number", likes : "number", user : { id : "number",  username: "string", fullName: "string" }
```
POST  http://localhost:8080/comments/add
Content-Type: application/json

{
	"body" : "",
	"postId" : 12,
	"likes" : 2,
	"user" : {
		"id" : 1,
		"username" : "",
		"fullName" : ""
	}
}
```

### Update Comment
* Must be one of the mentioned parameters. And must have same data type
* Parameters { body : "string", postId : "number", likes : "number", user : { id : "number",  username: "string", fullName: "string" }
```
PUT  http://localhost:8080/comments/c/40
Content-Type: application/json

{
	"user" : {
		"id" : 2,
		"username" : "asdf",
		"fullName" : "324"
	}
}
```

### Delete Comment
```
DELETE   http://localhost:8080/comments/c/201
```

## Posts
* Modules : All Posts, Single Post, Search Posts, Sort Posts, Post By User, Add Post, Update post, Delete Post
* URL : /posts/

### All Posts
* Will return first posts 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
```
GET http://localhost:8080/posts
```
### Single Post
* Will return one Post requested by ID
```
GET http://localhost:8080/posts/p/1
```

### Search Posts
* Will return first posts 10 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
```
GET http://localhost:8080/posts/search?Search=it
```

### Sort Posts
* Sort by Property must be type of either string or number
* Will sort by the provided property. Also accepts order whether ascending or descending
* By Default sorts in ascending way
* By Default returns first 10
* Accepts both limit and skip in query  example {?limit=10&skip=5}
```
GET http://localhost:8080/posts/sort?sortby=id&order=desc
```

### Post By User
* Will return Posts by the User requested in UserID
* By default returns first 10
* Accepts both limit and skip in query  example {?limit=10&skip=5}
```
GET http://localhost:8080/posts/user/112
```

### Add Post
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters { title : "string", body : "string", views : "number", tags: "array", reactions : { likes : "number",  dislikes: "number" }}

```
POST http://localhost:8080/posts/add
Content-Type: application/json

{
	"title" : "sdf",
	"body" : "asdf",
	"views" : 211,
	"userId" : 12,
	"tags" : [],
	"reactions" : {
		"likes": 200,
		"dislikes":100
	}
}
```

### Update post
* Must be one of the mentioned parameters. And must have same data type
* Parameters { title : "string", body : "string", views : "number", tags: "array", reactions : { likes : "number",  dislikes: "number" }}
```
PUT  http://localhost:8080/posts/p/112
Content-Type: application/json

{
	"title" : "Yes The ship rolls and her timbers creak lik",
	"reactions" : {
		"likes":2,
		"dislikes":2
	}
}
```

### Delete Post
```
DELETE http://localhost:8080/posts/p/201
```
