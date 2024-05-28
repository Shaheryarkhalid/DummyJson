import {Posts} from "../../Data/index.js"

const Sort_Posts = (req, res) => {
	let {sortby, order, limit, skip} = req.query;
	limit = Number(limit);
	skip = Number(skip);
	if(!sortby) return res.status(402).json({success:false,message:`Please include {sortby} parameter in query...`});
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	if(!Parsed_Posts[0].hasOwnProperty(sortby)) return res.status(401).json({success:false,message:"Please include a valid property..."})
	let Type = typeof Parsed_Posts[0][sortby];
	if(Type !== "string" && Type !== "number") return res.status(401).json({success:false,message:"{sortby} property must be of type number or string..."});
	Type === "string" && order === "desc" ? Parsed_Posts.sort((a,b)=> String(b[sortby]).localeCompare(String(a[sortby]))) : Parsed_Posts.sort((a,b)=> String(a[sortby]).localeCompare(String(b[sortby])));
	Type === "number" && order === "desc" ? Parsed_Posts.sort((a, b) => b[sortby] - a[sortby]) : Parsed_Posts.sort((a, b) => a[sortby] - b[sortby]);
	if(limit && skip) return res.status(200).json({success:true, data:Parsed_Posts.slice(skip, limit)});
	if(limit ) return res.status(200).json({success:true, data:Parsed_Posts.slice(0, limit)});
	if(skip ) return res.status(200).json({success:true, data:Parsed_Posts.slice(skip, skip + 10)});
	return res.status(200).json({success:true, data:Parsed_Posts.slice(0,10)});
}
export default Sort_Posts