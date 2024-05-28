import { Quotes } from "../../Data/index.js"

const All_Quotes = (req, res) => {
	let {limit,skip} =req.query;
	limit =Number(limit); 
	skip =Number(skip); 
	let Parsed_Quotes = JSON.parse(JSON.stringify(Quotes));
	if(limit && skip) return res.status(200).json({success:true, data: Parsed_Quotes.slice(skip,limit)})
	if(limit) return res.status(200).json({success:true,data: Parsed_Quotes.slice(0,limit)})
	if(skip) return res.status(200).json({success:true,data:Parsed_Quotes.slice(skip, skip + 20)})
	return res.status(200).json({success:true,data:Parsed_Quotes.slice(0, 20)})	
}
export default All_Quotes