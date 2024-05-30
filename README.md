# All API End Points
* Auth, Users, Products, Carts, Posts, Comments, Quotes, Recipes, Todos  

## Auth 
* Modules : User Login, Current Authenticated User, Refresh Auth Token
* URL :  /auth/

### - User Login 
* Parameters must include Email and Password 

* Will compare provided values with user values in User.json in Data Folder

* Will return Authorization Token

* Auth Token will have expiry time of 59 minutes.
Javascript (Fetch):
```
fetch('http://localhost:8080/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    Email: 'emily.johnson@x.dummyjson.com',
    Password: 'emilyspass'
  })
})
```

REST:
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
* Athorization token  will Provided as a return value from login(if Successful) or Refresh Token.

Javasctipt(Fetch):
```
const url = 'http://localhost:8080/auth/me';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJtYWlkZW5OYW1lIjoiU21pdGgiLCJhZ2UiOjI4LCJnZW5kZXIiOiJmZW1hbGUiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwicGhvbmUiOiIrODEgOTY1LTQzMS0zMDI0IiwidXNlcm5hbWUiOiJlbWlseXMiLCJwYXNzd29yZCI6ImVtaWx5c3Bhc3MiLCJiaXJ0aERhdGUiOiIxOTk2LTUtMzAiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJibG9vZEdyb3VwIjoiTy0iLCJoZWlnaHQiOjE5My4yNCwid2VpZ2h0Ijo2My4xNiwiZXllQ29sb3IiOiJHcm';
fetch(url , {
  method: 'GET',
  headers: {
	'Authorization' : token
	}
})
```
REST :
```
GET http://localhost:8080/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJtYWlkZW5OYW1lIjoiU21pdGgiLCJhZ2UiOjI4LCJnZW5kZXIiOiJmZW1hbGUiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwicGhvbmUiOiIrODEgOTY1LTQzMS0zMDI0IiwidXNlcm5hbWUiOiJlbWlseXMiLCJwYXNzd29yZCI6ImVtaWx5c3Bhc3MiLCJiaXJ0aERhdGUiOiIxOTk2LTUtMzAiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJibG9vZEdyb3VwIjoiTy0iLCJoZWlnaHQiOjE5My4yNCwid2VpZ2h0Ijo2My4xNiwiZXllQ29sb3IiOiJHcmVlbiIsImhhaXIiOnsiY29sb3IiOiJCcm93biIsInR5cGUiOiJDdXJseSJ9LCJpcCI6IjQyLjQ4LjEwMC4zMiIsImFkZHJlc3MiOnsiYWRkcmVzcyI6IjYyNiBNYWluIFN0cmVldCIsImNpdHkiOiJQaG9lbml4Iiwic3RhdGUiOiJNaXNzaXNzaXBwaSIsInN0YXRlQ29kZSI6Ik1TIiwicG9zdGFsQ29kZSI6IjI5MTEyIiwiY29vcmRpbmF0ZXMiOnsibGF0IjotNzcuMTYyMTMsImxuZyI6LTkyLjA4NDgyNH0sImNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIn0sIm1hY0FkZHJlc3MiOiI0NzpmYTo0MToxODplYzplYiIsInVuaXZlcnNpdHkiOiJVbml2ZXJzaXR5IG9mIFdpc2NvbnNpbi0tTWFkaXNvbiIsImJhbmsiOnsiY2FyZEV4cGlyZSI6IjAzLzI2IiwiY2FyZE51bWJlciI6IjkyODk3NjA2NTU0ODE4MTUiLCJjYXJkVHlwZSI6IkVsbyIsImN1cnJlbmN5IjoiQ05ZIiwiaWJhbiI6IllQVVhJU09CSTdUVEhQSzJCUjNIQUlYTCJ9LCJjb21wYW55Ijp7ImRlcGFydG1lbnQiOiJFbmdpbmVlcmluZyIsIm5hbWUiOiJEb29sZXksIEtvemV5IGFuZCBDcm9uaW4iLCJ0aXRsZSI6IlNhbGVzIE1hbmFnZXIiLCJhZGRyZXNzIjp7ImFkZHJlc3MiOiIyNjMgVGVudGggU3RyZWV0IiwiY2l0eSI6IlNhbiBGcmFuY2lzY28iLCJzdGF0ZSI6Ildpc2NvbnNpbiIsInN0YXRlQ29kZSI6IldJIiwicG9zdGFsQ29kZSI6IjM3NjU3IiwiY29vcmRpbmF0ZXMiOnsibGF0Ijo3MS44MTQ1MjUsImxuZyI6LTE2MS4xNTAyNjN9LCJjb3VudHJ5IjoiVW5pdGVkIFN0YXRlcyJ9fSwiZWluIjoiOTc3LTE3NSIsInNzbiI6IjkwMC01OTAtMjg5IiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC45MyBTYWZhcmkvNTM3LjM2IiwiY3J5cHRvIjp7ImNvaW4iOiJCaXRjb2luIiwid2FsbGV0IjoiMHhiOWZjMmZlNjNiMmE2YzAwM2YxYzMyNGMzYmZhNTMyNTkxNjIxODFhIiwibmV0d29yayI6IkV0aGVyZXVtIChFUkMyMCkifSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE2NjU3NDc5LCJleHAiOjE3MTY2NjEwMTl9.uKQQ-VzvFqAAlgUF6_QgcKHTfb27JJabAVcuQOzRSZI
```
### - Refresh Auth Token
* Must include Previous Auth Token in Authorization parameter in request header
* Will reutrn new Auth token
* New returned Auth Token will have expiry time of 59 minutes.
Javascript(Fetch) :
```
const url = 'http://localhost:8080/auth/refresh';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJtYWlkZW5OYW1lIjoiU21pdGgiLCJhZ2UiOjI4LCJnZW5kZXIiOiJmZW1hbGUiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwicGhvbmUiOiIrODEgOTY1LTQzMS0zMDI0IiwidXNlcm5hbWUiOiJlbWlseXMiLCJwYXNzd29yZCI6ImVtaWx5c3Bhc3MiLCJiaXJ0aERhdGUiOiIxOTk2LTUtMzAiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJibG9vZEdyb3VwIjoiTy0iLCJoZWlnaHQiOjE5My4yNCwid2VpZ2h0Ijo2My4xNiwiZXllQ29sb3IiOiJHcm';
fetch(url , {
  method: 'POST',
  headers: {
	'Authorization' : token
	}
})
```

REST : 
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
Javascrit(Fetch) : 
```
	fetch("http://localhost:8080/Carts/")
```
REST :
```
GET http://localhost:8080/Carts/
```

### - Single Cart
* Will return one Cart requested by ID
Javascript(Fetch) : 
```
	fetch("http://localhost:8080/Carts/c/1")
```
REST :
```
GET http://localhost:8080/Carts/c/1
```

### - Carts by User
* Will return Carts for the user requested in UserID
Javascript(Fetch) :
```
	fetch("http://localhost:8080/Carts/user/23")
``` 
REST : 
```
GET http://localhost:8080/Carts/user/23
```

### - Add Cart
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters {total : "number", discountedTotal : "number", userId : "number", totalProducts : "number", totalQuantity : "number", products: "array"}
Javascript(Fetch) :
```
	fetch("http://localhost:8080/Carts/add",{
		method: 'POST',
		headers : {
			'Content-Type' : 'application/json'
		}
		body : JSON.stringify({
			total : 0, 
			discountedTotal : 0,
			userId : 0, 
			totalProducts : 0, 
			totalQuantity : 0, 
			products: []	
		}) 
	})
```
REST :
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
Javascript(Fetch) :
```
fetch('http://localhost:8080/Carts/c/1',{
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body:JSON.stringify({
		total : 223
	})
})	
```
REST :
```
PUT http://localhost:8080/Carts/c/1
Content-Type: application/json

{
	"total" : 223
}
```

### - Delete Cart
Javascript(Fetch) :
```
fetch("http://localhost:8080/Carts/c/1",{method:'DELETE'})
```
REST :
```
DELETE  http://localhost:8080/Carts/c/1
```

## Comments
* Modules : All Comments, Single Comment, Comment by Post, Add Comment, Update Comment, Delete Comment
* URL : /comments/

### - All Comments
* Will return first comment 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) : 
```
fetch('http://localhost:8080/comments');
```
REST :
```
GET http://localhost:8080/comments
```

### - Single Comment
* Will return one Comment requested by ID
Javascript(Fetch) :
```
fetch("http://localhost:8080/comments/c/123")
```
REST :
```
GET http://localhost:8080/comments/c/123
```

### - Comment by Post
* Will return Comment for the Post requested in PostID
Javascript(Fetch) :
```
fetch("http://localhost:8080/comments/post/40");
```
REST : 
```
GET http://localhost:8080/comments/post/40
```

### - Add Comment
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters : { body : "string", postId : "number", likes : "number", user : { id : "number",  username: "string", fullName: "string" }
Javascript(Fetch) : 
```
fetch("http://localhost:8080/comments/add",{
	method:'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body:JSON.stringify({
		body : "",
		postId : 12,
		likes : 2,
		user : {
			id : 1,
			username : "",
			fullName : ""
		}
	})
})
```
REST :
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

### - Update Comment
* Must be one of the mentioned parameters. And must have same data type
* Parameters { body : "string", postId : "number", likes : "number", user : { id : "number",  username: "string", fullName: "string" }
Javascript(Fetch) :
```
fetch("http://localhost:8080/comments/c/40",{
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	}.
	body: JSON.stringify({
		user : {
			id : 2,
			username : "Shaheryar",
			fullName : "Khalid"
		}
	})
})
```
REST :
```
PUT  http://localhost:8080/comments/c/40
Content-Type: application/json

{
	"user" : {
		"id" : 2,
		"username" : "asdf",
		"fullName" : "324"
	}
	"user" : {
		"id" : 2,
		"username" : "asdf",
		"fullName" : "324"
	}
}
```

### - Delete Comment
Javascript(Fetch) :
```
fetch("http://localhost:8080/comments/c/201",{method:'DELETE'});
```
REST :
```
DELETE   http://localhost:8080/comments/c/201
```

## Posts
* Modules : All Posts, Single Post, Search Posts, Sort Posts, Post By User, Add Post, Update post, Delete Post
* URL : /posts/

### - All Posts
* Will return first posts 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/posts')
```
REST :
```
GET http://localhost:8080/posts
```
### - Single Post
* Will return one Post requested by ID
Javascript(Fetch) :
```
	fetch("http://localhost:8080/posts/p/1")
```
REST :
```
GET http://localhost:8080/posts/p/1
```

### - Search Posts
* Will return first posts 10 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/posts/search?' + new URLSearchParams({
    Search: 'it',
}))
```
REST :
```
GET http://localhost:8080/posts/search?Search=it
```

### - Sort Posts
* Sort by Property must be type of either string or number
* Will sort by the provided property. Also accepts order whether ascending or descending
* By Default sorts in ascending way
* By Default returns first 10
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch("http://localhost:8080/posts/sort?" + new URLSearchParams({
    sortby: 'id',
	order : 'desc'
}))
```
REST : 
```
GET http://localhost:8080/posts/sort?sortby=id&order=desc
```

### - Post By User
* Will return Posts by the User requested in UserID
* By default returns first 10
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch("http://localhost:8080/posts/user/112")
```
REST :
```
GET http://localhost:8080/posts/user/112
```

### - Add Post
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters { title : "string", body : "string", views : "number", tags: "array", reactions : { likes : "number",  dislikes: "number" }}
Javascript(Fetch):
```
fetch("http://localhost:8080/posts/add",{
	method: 'POST',
	headers: {
	'Content-Type': 'application/json'
	},
	body:JSON.stringify({
		title : "sdf",
		body : "asdf",
		views : 211,
		userId : 12,
		tags : [],
		reactions : {
			likes: 200,
			dislikes:100
		}
	})
})
```
REST :
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

### - Update post
* Must be one of the mentioned parameters. And must have same data type
* Parameters { title : "string", body : "string", views : "number", tags: "array", reactions : { likes : "number",  dislikes: "number" }}
Javascript(Fetch) :
```
fetch("http://localhost:8080/posts/p/112",{
	method: 'PUT',
	headers:{
		'Content-Type': 'application/json'
	},
	body: {
		title : "Yes The ship rolls and her timbers creak lik",
		reactions : {
			likes: 2,
			dislikes: 2
		}
	}
})
 ```
REST :
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

### - Delete Post
Javascript(Fetch) :
```
fetch("http://localhost:8080/posts/p/201",{method:'DELETE'})
```
REST :
```
DELETE http://localhost:8080/posts/p/201
```

## Products
* Modules : All Product, Single Product, Search Products, Product Categories, Products By Category, Add Product, Update Product, Delete Product
* URL : /Products/

### - All Product
* Will return first Products 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Products')
```
REST :
```
GET http://localhost:8080/Products
```

### - Single Product
* Will return one Product requested by ID
Javascript(Fetch) : 
```
fetch('http://localhost:8080/Products/p/5')
```
REST :
```
GET http://localhost:8080/Products/p/5
```

### - Search Products
* Will return first Products 5 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
const url = new URL('http://localhost:8080/Products/search');
const params = { Search: 'E' };
url.search = new URLSearchParams(params).toString();
fetch(url)
```
REST :
```
GET http://localhost:8080/Products/search?Search=E
```
### - Product Categories
* Will return all Procuct Categories
Javascript(Fetch) : 
```
fetch('http://localhost:8080/Products/Categories')
```
REST :
```
	GET http://localhost:8080/Products/Categories
```

### - Products By Category
* Will return all Procucts by Categories
* Accepts both limit and skip. By default returns first 20
Javascript(Fetch) :
```
fetch('http://localhost:8080/Products/Category/smartphones')
```
REST :
```
GET http://localhost:8080/Products/Category/smartphones
```

### - Add Product
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters {"title" : "string",	"description" : "string" , "price" : "number" , "discountPercentage" : "number" ,"rating" : "number" , "stock" : "number" , "brand" : "string" , "category" : "string" ,"thumbnail" : "string" , "images" : "array"}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Products/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "",
    description: "string",
    price: "number",
    discountPercentage: "number",
    rating: "number",
    stock: "number",
    brand: "string",
    category: "string",
    thumbnail: "string",
    images: ["image1.jpg", "image2.jpg"] // Example array
  })
})
``` 
REST : 
```
POST  http://localhost:8080/Products/add
Content-Type: application/json

{
	"title" : "",	
	"description" : "string" , 
	"price" : "number" , 
	"discountPercentage" : "number" ,
	"rating" : "number" , 
	"stock" : "number" , 
	"brand" : "string" , 
	"category" : "string" ,
	"thumbnail" : "string" , 
	"images" : "array"
}
```
### - Update Product
* Must be one of the mentioned default parameters or the parameter that is manually added in add Product. And must have same data type
* Parameters {"title" : "string",	"description" : "string" , "price" : "number" , "discountPercentage" : "number" ,"rating" : "number" , "stock" : "number" , "brand" : "string" , "category" : "string" ,"thumbnail" : "string" , "images" : "array"}
Javascript :
```
fetch('http://localhost:8080/Products/p/5', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'Bull Shit'
  })
})
```
REST :
```
PUT http://localhost:8080/Products/p/5
Content-Type: application/json

{
	"firstName" : "Bull Shit"
}
```
### - Delete Product
Javascript(Fetch) : 
```
fetch('http://localhost:8080/Products/Product/206', {method: 'DELETE',})
```
REST :
```
DELETE  http://localhost:8080/Products/Product/206
```

## Quotes
* Modules : All Quotes, Single Quote, Random Quote
* URL : /Quotes/

### - All Quotes
* Will return first Quotes 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Quotes')
```
REST :
```
GET http://localhost:8080/Quotes
```

### - Single Quote
* Will return one Quote requested by ID
Javascript(Fetch) :
```
fetch('http://localhost:8080/Quotes/q/6')
```
REST :
```
GET http://localhost:8080/Quotes/q/6
```
### - Random Quote
* Will return random Quote
Javascript(Fetch) :
```
fetch("http://localhost:8080/Quotes/random")
```
REST :
```
GET http://localhost:8080/Quotes/random
```

## Recipes
* Modules : All Recipes, Single Recipe, Search Recipes  
* URL : /Recipes/

### - All Recipes
* Will return first Recipes 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Recipes')
```
REST :
```
GET http://localhost:8080/Recipes
```

### - Single Recipe
* Will return one Recipe requested by ID
Javascript(Fetch) :
```
fetch('http://localhost:8080/Recipes/r/123')
```
REST :
```
GET http://localhost:8080/Recipes/r/123
```
### - Search Recipes
* Will return first 10 Recipes by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Recipes/search?Search=Eth')
```
REST :
```
GET http://localhost:8080/Recipes/search?Search=Eth
```

## Todos
* Modules : All Todos, Single Todo, Random Todo, Todo By User, Add Todo, Update Todo, Delete Todo
* URL : /Todos/

### - All Todos
* Will return first Todos 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/todos')
```
REST :
```
GET http://localhost:8080/todos
```

### - Single Todo
* Will return one todo requested by ID
Javascript(Fetch) :
```
fetch('http://localhost:8080/todos/t/2')
```
REST :
```
GET http://localhost:8080/todos/t/2
```

### - Random Todo
* Will return random Todo
Javascript(Fetch) :
```
fetch('http://localhost:8080/todos/random')
```
REST :
```
GET http://localhost:8080/todos/random
```

### - Todo By User
* Will return todo by the User requested in UserID
* By default returns first 10
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/todos/user/1')
```
REST :
```
GET http://localhost:8080/todos/user/1
```

### - Add Todo
* Must include all of mentioned parameters and parameters must be of same data type 
* Parameters { todo: "string", userId: "number" }
Javascript(Fetch) :
```
fetch('http://localhost:8080/todos/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    todo: 'asd',
    userId: 23
  })
})
```
Rest :
```
POST  http://localhost:8080/todos/add
Content-Type: application/json

{
	"todo": "asd",
	"userId": 23
}
```

### - Update Todo
* Must be one of the mentioned parameters. And must have same data type
* Parameters { todo: "string", userId: "number" }
Javascript(Fetch) : 
```
fetch('http://localhost:8080/todos/t/2', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 111
  })
})
``` 
REST :
```
PUT  http://localhost:8080/todos/t/2
Content-Type: application/json

{
	"userId" : 111
}
```
### - Delete Todo
Javscript(Fetch) :
```
fetch("http://localhost:8080/todos/t/201",{method:'DELETE'})
```
REST :
```
DELETE   http://localhost:8080/todos/t/201
```

## Users
* Modules : All User, Single User, Search Users, Filter Users, Sort Users, Add User, Update post, Delete User
* URL : /Users/

### - All User
* Will return first Users 20 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users')
```
REST :
```
GET http://localhost:8080/Users
```
### - Single User
* Will return one User requested by ID
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/user/5')
```
REST :
```
GET http://localhost:8080/Users/user/5
```

### - Search Users
* Will return first Users 5 by default
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/search?Search=Emily Smith Johnson')
```
REST :
```
GET http://localhost:8080/Users/search?Search=Emily Smith Johnson
```

### - Filter Users
* Can be Single property or could be nested properties seperated by "." in key 
* Will Return filtered Users by provided property or nested property's value
* Accepts Both limit and skip in query example {?limit=2&skip=1} 
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/filter?key=hair.color&value=Red')
```
REST:
```
GET http://localhost:8080/Users/filter?key=hair.color&value=Red
```

### - Sort Users
* Sort by Property must be type of either string or number
* Will sort by the provided property. Also accepts order whether ascending or descending
* By Default sorts in ascending way
* By Default returns first 10
* Accepts both limit and skip in query  example {?limit=10&skip=5}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/sort?sortby=firstName&order=desc&limit=2&skip=1')
```
REST :
```
GET http://localhost:8080/Users/sort?sortby=firstName&order=desc&limit=2&skip=1
```

### - Add User
* Some Fields will be added by default for future sorting or other actions
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'shaheryar',
    password: 'fsdfd'
  })
})

```  
REST :
```
POST  http://localhost:8080/Users/add
Content-Type: application/json

{
	"firstName" : "shaheryar",
	"password" : "fsdfd"

}
```

### - Update post
* Must be one of the mentioned default parameters or the parameter that is manually added in add User. And must have same data type
* Must match Data type already provided
* { firstName: "", lastName: "", maidenName: "", age: 18,gender: "", email: "",phone: "",username: "",password: "",birthDate: "",image: "",bloodGroup: "",height: 0,weight: 0,eyeColor: "",hair: {  color: "",  type: ""},ip: "",address: {  address: "",  city: "",  state: "",  stateCode: "",  postalCode: "",  coordinates:    lat: 0,    lng: 0  },  country: ""},macAddress: "",university: "",bank: {  cardExpire: "",  cardNumber: "",  cardType: "",  currency: "",  iban: ""},company: {  department: "",  name: "",  title: "",  address: {    address: "",    city: "",    stateCode: "",    state: "",    postalCode: "",    coordinates: {      lat: 0,      lng: 0    },    country: ""  }},ein: "",ssn: "",userAgent: "",crypto: {  coin: "",  wallet: "",  network: ""},role: ""}
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/user/5', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "firstName": "Shaheryar"
  })
})

```
REST :
```
PUT http://localhost:8080/Users/user/5
Content-Type: application/json

{
	"firstName" : "Shaheryar"
}
```
### - Delete User
Javascript(Fetch) :
```
fetch('http://localhost:8080/Users/user/206')
```
REST :
```
DELETE  http://localhost:8080/Users/user/206
```
