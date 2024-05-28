import {Posts} from "../../Data/index.js"

const All_Posts = (req, res)=>{
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	if(limit && skip) return res.status(200).json({success:true,data:Parsed_Posts.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data:Parsed_Posts.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Posts.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Posts.slice(0, 20)})	
}	
export default All_Posts