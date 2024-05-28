import { Router } from "express";
import { All_Recipes, Recipe, Search_Recipe } from "../Controllers/index.js"

const Recipes_Router = Router();

Recipes_Router.get("/" , All_Recipes)
Recipes_Router.get("/r/:ID" , Recipe)
Recipes_Router.get("/Search" , Search_Recipe)

export default Recipes_Router