import {Users} from "../../Data/index.js";

const Search_User = (req, res) => {
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	let {limit,skip,Search} = req.query;
	limit = Number(limit);
	skip = Number(skip);
	if(Search)
	{	
		let Result = Parsed_Users.filter(user => ( user.firstName + " " + user.maidenName + " " + user.lastName).toLowerCase().startsWith(Search.toLowerCase().toString()));
		if(!Result || !Result[0].id) return res.status(404).json({success: false, message: `No user with the name: ${Search} `}) ;
		if(limit && skip) return res.status(200).json({success: true, data: Result.slice(skip,limit)});
		if(limit) return res.status(200).json({success: true, data: Result.slice(0,limit)});
		if(skip) return res.status(200).json({success: true, data: Result.slice(skip,skip+5)});
		return res.status(200).json({success: true, data: Result.slice(0,5)});
	}
	!Search && Not_Found_404(req,res);
}
export default Search_User