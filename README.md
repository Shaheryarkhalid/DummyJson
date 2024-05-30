# All API End Points

## Auth 
* Modules : User Login, Current Authenticated User, Refresh Auth Token
* URL :  /auth 

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
