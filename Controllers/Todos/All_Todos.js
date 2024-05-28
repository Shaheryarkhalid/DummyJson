import {Todos} from "../../Data/index.js"

const All_Todos = (req, res) => {
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Todos = JSON.parse(JSON.stringify(Todos));
	if(limit && skip) return res.status(200).json({success:true, data: Parsed_Todos.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data: Parsed_Todos.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Todos.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Todos.slice(0, 20)})	
}
export default All_Todos