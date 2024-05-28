import { Router  } from "express";
import { All_Todos, Todo, Random_Todo, Todo_By_User, Add_Todo, Update_Todos, Delete_Todo } from "../Controllers/index.js"

const Todo_Router = Router();

Todo_Router.get("/" , All_Todos)
Todo_Router.get("/random" , Random_Todo)
Todo_Router.get("/t/:ID" , Todo)
Todo_Router.get("/user/:ID" , Todo_By_User)

Todo_Router.post("/add" , Add_Todo)

Todo_Router.put("/t/:ID" , Update_Todos)

Todo_Router.delete("/t/:ID" , Delete_Todo)


export default Todo_Router