import { Todos } from "../../Data/index.js"
import { writeFile } from "fs"
import { Not_Found_404 } from "../index.js"

const Delete_Todo = (req, res) => { 
	let {ID} =req.params;
	if(!ID) return Not_Found_404(req,res);
	let Parsed_Todos = JSON.parse(JSON.stringify(Todos));
	let Todo_to_be_Deleted = Parsed_Todos.find(todo => todo.id === Number(ID));
	if(!Todo_to_be_Deleted) return res.status(404).json({success:false,message:`No Todo with ID: ${ID} found`})
	Parsed_Todos = Parsed_Todos.filter(todo => todo.id !== Number(ID));	
	writeFile("./Data/Todos.json", JSON.stringify(Parsed_Todos), error =>{
		if(error) return res.status(401).json({success:false,message:"Internel Server Error"});
		return res.status(202).json({success:true,message:"Deleted Successfull"})
	})
}
export default Delete_Todo