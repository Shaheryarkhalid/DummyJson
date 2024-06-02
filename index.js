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

app.get("/", (req,res)=> res.status(200).json({
	success: true,
	message: "Welcome to Mock Mate. Please refer to the modules to get and manipulate data. Please refer to https://github.com/Shaheryarkhalid/Mock_Mate  for more in detail documentation.",
	modules: {
	  Auth: {
		description: "User Login, Current Authenticated User, Refresh Auth Token",
		url: "/auth/"
	  },
	  Users: {
		description: "Retrieve all users, single user, search users, filter users, sort users, add, update, delete user",
		url: "/users/"
	  },
	  Products: {
		description: "Retrieve all products, single product, search for specific products, retrieve product categories, retrieve products by category,  add, update, delete product",
		url: "/products/"
	  },
	  Carts: {
		description: "Fetching all carts, retrieving a single cart, fetching carts by user, adding, updating, deleting cart",
		url: "/carts/"
	  },
	  Posts: {
		description: "Fetching all posts, retrieving a single post, searching for posts, sorting posts, fetching posts by user, adding, updating, deleting post",
		url: "/posts/"
	  },
	  Comments: {
		description: "Fetching all comments, retrieving a single comment, fetching comments by post, adding, updating, deleting comment",
		url: "/comments/"
	  },
	  Quotes: {
		description: "Fetching all quotes, retrieving a single quote, retrieving random quote",
		url: "/quotes/"
	  },
	  Recipes: {
		description: "Fetching all recipes, retrieving a single recipe, search recipe",
		url: "/recipes/"
	  },
	  Todos: {
		description: "Fetching all todos, retrieving a single todos, random todo, todo by user, adding, updating, deleting todo",
		url: "/todos/"
	  }
	}
  }
  ));

app.all("*", Not_Found_404 );
  
app.listen(8080, _ => console.log("Server Listening on http://localhost:8080"))    