import {Todos} from "../../Data/index.js"

const Todo_By_User = (req, res) => {
	let {ID} = req.params;
	let {limit,skip} = req.query;
	let Parsed_Todos = JSON.parse(JSON.stringify(Todos));
	if(ID)
	{
		let todos = Parsed_Todos.filter(todo => todo.userId === Number(ID));
		if(todos.length === 0) return  res.status(404).json({success:false, message: `No Todo for User with UserID: ${ID}` });
		if(limit && skip) return res.status(200).json({success:true ,data : todos.slice(skip, limit)})
		if(limit) return res.status(200).json({success:true ,data : todos.slice(0, limit)})	
		if(skip) return res.status(200).json({success:true ,data : todos.slice(skip, skip + 10)})
		return res.status(200).json({success:true ,data : todos.slice(0, 10)})
	}
	!ID && Not_Found_404(req,res);
}
export default Todo_By_User