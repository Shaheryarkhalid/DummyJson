import {Recipes} from "../../Data/index.js"

let All_Recipes = (req,res) => {
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Recipes = JSON.parse(JSON.stringify(Recipes));
	if(limit && skip) return res.status(200).json({success:true, data: Parsed_Recipes.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data: Parsed_Recipes.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Recipes.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Recipes.slice(0, 20)})	
}
export default All_Recipes