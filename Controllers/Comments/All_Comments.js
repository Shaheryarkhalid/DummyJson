import {Comments} from "../../Data/index.js"

const All_Comments = (req, res)=>{
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Comments = JSON.parse(JSON.stringify(Comments));
	if(limit && skip) return res.status(200).json({success:true,data:Parsed_Comments.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data:Parsed_Comments.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Comments.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Comments.slice(0, 20)})	
}
export default All_Comments