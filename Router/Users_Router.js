import { Router } from "express"
import { All_Users, User, Search_User, Filter_Users, Sort_User, Add_User, Update_User, Delete_User } from "../Controllers/index.js";

const Users_Router = Router();

Users_Router.get("/", All_Users)
Users_Router.get("/user/:ID", User)
Users_Router.get("/search", Search_User)
Users_Router.get("/filter", Filter_Users)
Users_Router.get("/sort", Sort_User)

Users_Router.post("/add", Add_User)

Users_Router.put("/user/:ID", Update_User)

Users_Router.delete("/user/:ID", Delete_User)


export default Users_Router