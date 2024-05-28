import { Router } from "express";
import { All_Quotes, Quote, Random_Quote } from "../Controllers/index.js"

const Quotes_Router  = Router();

Quotes_Router.get("/", All_Quotes)
Quotes_Router.get("/q/:ID", Quote)
Quotes_Router.get("/random", Random_Quote)

export default Quotes_Router