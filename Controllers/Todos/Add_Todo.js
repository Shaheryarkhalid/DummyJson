import { Todos } from "../../Data/index.js"
import { writeFile } from "fs"

let Parsed_Todos = JSON.parse(JSON.stringify(Todos));

const Add_Todo = (req, res) => {
	let {todo, userId } = req.body;
	if(
		!todo ||
		!userId
	)  return res.status(400).json({scuccess: false, message: "Please include all  of the mentioned fields. {todo, userId}"});
	if(
		typeof todo !== "string" ||
		typeof userId !== "number"
	)  return res.status(401).json({scuccess: false, message: "All included fields must be of the valid data type {todo: string, userId: number}"});
	req.body.id=Id_Maker();
	req.body.completed=false;
	Parsed_Todos.push(req.body);
	writeFile("./Data/Todos.json",JSON.stringify(Parsed_Todos) , error => {
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false, message:"Some thing went wrong"})	
		}
		res.status(203).json({success:true,message:"Todo Added Successfully"})
	});
}
const Id_Maker = ()=>{
	let ids =Parsed_Todos.map(todo => todo.id);
	let ID = ids.length + 1;
	while(ids.includes(ID)) ID += 1;
	return ID;
}
export default Add_Todo