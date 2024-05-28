import {Products} from "../../Data/index.js" 

const All_Products = (req,res) => {
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	if(limit && skip) return res.status(200).json({success:true,data:Parsed_Products.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data:Parsed_Products.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Products.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Products.slice(0, 20)})	
}
export default All_Products;