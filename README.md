# All API End Points

## Auth  

### User Login 
*Parameters must include Email and Password 

*Will compare provided values with user values in User.json in Data Folder

*Will return Authorization Token

*Auth Token will have expiry time of 59 minutes.

```
POST http://localhost:8080/auth/login
Content-Type : application/json

{
	"Email" : "emily.johnson@x.dummyjson.com",
	"Password" : "emilyspass" 
}
```
