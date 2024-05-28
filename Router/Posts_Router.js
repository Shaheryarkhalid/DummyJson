import { Router } from "express";
import {All_Posts, Post, Search_Posts, Sort_Posts, Post_By_User, Add_Post, Update_Post, Delete_Post } from "../Controllers/index.js"

const Posts_Router = Router();

Posts_Router.get("/", All_Posts)
Posts_Router.get("/p/:ID", Post)
Posts_Router.get("/search", Search_Posts)
Posts_Router.get("/sort", Sort_Posts)
Posts_Router.get("/user/:ID", Post_By_User)

Posts_Router.post("/add", Add_Post)

Posts_Router.put("/p/:ID", Update_Post)

Posts_Router.delete("/p/:ID", Delete_Post)

export default Posts_Router;