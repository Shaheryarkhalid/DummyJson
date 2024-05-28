import {Users} from "../../Data/index.js";

const Sort_User = (req, res) => {
	let {sortby, order, limit, skip} = req.query;
	limit = Number(limit);
	skip = Number(skip);
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	if(!sortby) return res.status(402).json({success:false,message:`Please include {sortby} parameter in query...`});
	if(!Parsed_Users[0].hasOwnProperty(sortby)) return res.status(401).json({success:false,message:"Please include a valid property..."})
	let Type = typeof Parsed_Users[0][sortby];
	if(Type !== "string" && Type !== "number") return res.status(401).json({success:false,message:"{sortby} property must be of type number or string..."});
	Type === "string" && order === "desc" ? Parsed_Users.sort((a,b)=> String(b[sortby]).localeCompare(String(a[sortby]))) : Parsed_Users.sort((a,b)=> String(a[sortby]).localeCompare(String(b[sortby])));
	Type === "number" && order === "desc" ? Parsed_Users.sort((a, b) => b[sortby] - a[sortby]) : Parsed_Users.sort((a, b) => a[sortby] - b[sortby]);
	if(limit && skip) return res.status(200).json({success:true, data:Parsed_Users.slice(skip, limit)});
	if(limit ) return res.status(200).json({success:true, data:Parsed_Users.slice(0, limit)});
	if(skip ) return res.status(200).json({success:true, data:Parsed_Users.slice(skip, skip + 10)});
	return res.status(200).json({success:true, data:Parsed_Users.slice(0,10)});
}
export default Sort_User