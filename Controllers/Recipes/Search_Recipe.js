import {Recipes} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Search_Recipe = (req, res) => {
	let Parsed_Recipes = JSON.parse(JSON.stringify(Recipes));
	let {limit,skip,Search} = req.query;
	limit = Number(limit);
	skip = Number(skip);
	if(Search)
	{	
		let Result = Parsed_Recipes.filter(recipe => recipe.name.toLowerCase().startsWith(Search.toLowerCase().toString()));
		if(!Result || !Result[0].id) return res.status(404).json({success: false, message: `No result with the name: ${Search} `}) ;
		if(limit && skip) return res.status(200).json({success: true, data: Result.slice(skip,limit)});
		if(limit) return res.status(200).json({success: true, data: Result.slice(0,limit)});
		if(skip) return res.status(200).json({success: true, data: Result.slice(skip,skip+10)});
		return res.status(200).json({success: true, data: Result.slice(0,10)});
	}
	!Search && Not_Found_404(req,res);
}

export default Search_Recipe