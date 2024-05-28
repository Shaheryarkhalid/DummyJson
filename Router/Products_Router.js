import { Router } from "express";
import {All_Products, Product, Search_Products, Categories, Category,Add_Product,Update_Product,Delete_Product} from "../Controllers/index.js"

const Products_Router = Router();

Products_Router.get("/", All_Products);
Products_Router.get("/p/:ID", Product);
Products_Router.get("/Search", Search_Products);
Products_Router.get("/Categories", Categories);
Products_Router.get("/Category/:category", Category);

Products_Router.post("/add", Add_Product);

Products_Router.put("/p/:ID", Update_Product);

Products_Router.delete("/p/:ID", Delete_Product);

export default Products_Router