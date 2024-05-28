import { Router } from "express";
import { All_Carts, Cart, Cart_By_User, Add_Cart, Update_Cart, Delete_Cart } from "../Controllers/index.js";

const Carts_Router = Router();

Carts_Router.get("/", All_Carts)
Carts_Router.get("/c/:ID", Cart)
Carts_Router.get("/user/:ID", Cart_By_User)

Carts_Router.post("/add", Add_Cart)

Carts_Router.put("/c/:ID", Update_Cart)

Carts_Router.delete("/c/:ID", Delete_Cart)



export default Carts_Router