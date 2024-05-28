import { Router } from "express";
import { All_Comments, Comment, Comments_By_Post, Add_Comment, Update_Comment, Delete_Comment } from "../Controllers/index.js";

const Comments_Router = Router();

Comments_Router.get("/", All_Comments)
Comments_Router.get("/c/:ID", Comment)
Comments_Router.get("/Post/:ID", Comments_By_Post)

Comments_Router.post("/add", Add_Comment)

Comments_Router.put("/c/:ID", Update_Comment)

Comments_Router.delete("/c/:ID", Delete_Comment)




export default Comments_Router