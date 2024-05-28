import {Products} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Search_Products = (req,res) => {
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	let {limit,skip,Search} = req.query;
	limit = Number(limit);
	skip = Number(skip);
	if(Search)
	{	
		let Result = Parsed_Products.filter(product => product.title.toLowerCase().startsWith(Search.toLowerCase().toString()));
		if(Result.length === 0 ) return res.status(404).json({success: false, message: `No result with the name: ${Search} `}) ;
		if(limit && skip) return res.status(200).json({success: true, data: Result.slice(skip,limit)});
		if(limit) return res.status(200).json({success: true, data: Result.slice(0,limit)});
		if(skip) return res.status(200).json({success: true, data: Result.slice(skip,skip+10)});
		return res.status(200).json({success: true, data: Result.slice(0,10)});
	}
	!Search && Not_Found_404(req,res);
}
export default Search_Products