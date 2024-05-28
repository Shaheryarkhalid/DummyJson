import {Carts} from "../../Data/index.js"

const All_Carts = (req,res) => {
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Carts = JSON.parse(JSON.stringify(Carts));
	if(limit && skip) return res.status(200).json({success:true,data:Parsed_Carts.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data:Parsed_Carts.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Carts.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Carts.slice(0, 20)})	
}

export default All_Carts