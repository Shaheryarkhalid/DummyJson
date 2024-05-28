import { Todos } from "../../Data/index.js"

const Todo = (req, res) => {
	let { ID } = req.params;
	let Parsed_Todos = JSON.parse(JSON.stringify(Todos));
	if(ID)
	{
		let todo = Parsed_Todos.find(todo => todo.id === Number(ID));
		todo && todo.id ? res.status(200).json({success:true ,data : todo}) : res.status(404).json({success:false, message: `No todo with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}
export default Todo