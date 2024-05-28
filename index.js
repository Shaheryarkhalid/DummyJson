import express from "express"
import { Not_Found_404 } from "./Controllers/index.js"
import { Products_Router,Carts_Router, Recipes_Router, Users_Router, Auth_Router, Posts_Router, Comments_Router, Todo_Router, Quotes_Router} from "./Router/index.js"
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
app.use("/Products", Products_Router); 
app.use("/Carts", Carts_Router);
app.use("/Recipes", Recipes_Router); 
app.use("/Users", Users_Router);
app.use("/Auth", Auth_Router);
app.use("/Posts", Posts_Router);
app.use("/Comments", Comments_Router);
app.use("/Todos", Todo_Router);
app.use("/Quotes", Quotes_Router);

app.get("/", (req,res)=> res.status(200).json({success:true,message: "Server Working Fine..."}));

app.all("*", Not_Found_404 );
  
app.listen(8080, _ => console.log("Server Listening on http://localhost:8080"))    