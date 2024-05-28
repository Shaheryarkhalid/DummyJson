import {Users} from "../../Data/index.js";

const All_Users = (req, res) => {
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	if(limit && skip) return res.status(200).json({success:true, data: Parsed_Users.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data: Parsed_Users.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Users.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Users.slice(0, 20)})	
}
export default All_Users