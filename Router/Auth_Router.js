import { Router } from "express";
import { Login, Current_Authenticated_User, Refresh_Auth_Token } from "../Controllers/index.js"

const Auth_Router = Router();

Auth_Router.post("/login", Login)
Auth_Router.post("/refresh", Refresh_Auth_Token)

Auth_Router.get("/me", Current_Authenticated_User)

export default Auth_Router