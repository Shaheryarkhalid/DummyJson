import { writeFile } from "fs"
import { Todos } from "../../Data/index.js"

const Update_Todos = (req, res) =>{
	let {ID} = req.params;
	let {todo, completed, userId } = req.body;
	if(
		!todo &&
		!completed &&
		!userId
	)  return res.status(400).json({scuccess: false, message: "Please include valid property {todo, userId, completed}"});
	if(
		(todo && typeof todo !== "string") ||
		(completed && typeof completed !== "boolean") ||
		(userId && typeof userId !== "number")
	)  return res.status(401).json({scuccess: false, message: "All included fields must be of the valid data type {todo: string, userId: number}"});
	let Parsed_Todos = JSON.parse(JSON.stringify(Todos));
	let Todo_to_be_Updated = Parsed_Todos.find(todo => todo.id === Number(ID));
	if(!Todo_to_be_Updated) return res.status(404).json({succes:false,message:`No Todo found with ID: ${ID}`})
	for(let property in req.body)
	{
		if(Todo_to_be_Updated.hasOwnProperty(property)) Todo_to_be_Updated[property] = req.body[property]
	}
	Parsed_Todos = Parsed_Todos.filter(todo => todo.id !== Number(ID));
	Parsed_Todos.push(Todo_to_be_Updated);
	Parsed_Todos = JSON.stringify(Parsed_Todos);
	writeFile( "./Data/Todos.json", Parsed_Todos, error =>{
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false,message:"Internal Server Error"})
		}
		return 	res.json({succes:true,data:`Todo with ID: ${ID} is updated`});
	})
}
export default Update_Todos