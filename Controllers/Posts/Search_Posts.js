import {Posts} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Search_Posts = (req,res) =>{
	let {limit,skip,Search} = req.query;
	limit = Number(limit);
	skip = Number(skip);
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	if(Search)
	{	
		let Result = Parsed_Posts.filter(post => post.title.toLowerCase().startsWith(Search.toLowerCase().toString()));
		if(Result.length === 0) return res.status(404).json({success: false, message: `No Post with the : ${Search} `}) ;
		if(limit && skip) return res.status(200).json({success: true, data: Result.slice(skip,limit)});
		if(limit) return res.status(200).json({success: true, data: Result.slice(0,limit)});
		if(skip) return res.status(200).json({success: true, data: Result.slice(skip,skip+10)});
		return res.status(200).json({success: true, data: Result.slice(0,10)});
	}
	!Search && Not_Found_404(req,res);
}
export default Search_Posts