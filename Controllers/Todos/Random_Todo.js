import {Todos} from "../../Data/index.js"

const Random_Todo = (_ , res) => {
	let Parsed_Todos = JSON.parse(JSON.stringify(Todos));
	let Random_id= null;
	while(!Parsed_Todos[Random_id]) Random_id = Math.floor((Math.random() *  Parsed_Todos.length )+1);
	res.status(200).json({success:true,data:Parsed_Todos[Random_id]});
}
export default Random_Todo;