import {Posts} from "../../Data/index.js"
import {writeFile} from "fs"

let Parsed_Posts = JSON.parse(JSON.stringify(Posts));

const Add_Post = (req, res) =>{
	let { title, body, views, userId, tags, reactions } = req.body; 
	if(
		typeof title !== "string" || 
		typeof body !== "string" ||
		typeof views !== "number" ||  
		typeof userId !== "number" ||
		!Array.isArray(tags) ||
		typeof reactions !== "object"||
		!reactions.hasOwnProperty("likes") || 
		!reactions.hasOwnProperty("dislikes")
	) return res.status(400).json({success: false, message : 'Invalid Data: Please Include data in following format { title : string, body : string, views : number, userId : number, tags : array, reactions : object that has two properties likes: number, dislikes:number } } If no data is present send and emty string or 0 as a number. Data must be of same type as mentioned.'});
	req.body.id = Id_Maker();
	Parsed_Posts.push(req.body);
	writeFile("./Data/Posts.json",JSON.stringify(Parsed_Posts) , (error, data) => {
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false, message:"Some thing went wrong"})	
		}
		res.status(203).json({success:true,message:"Post Added Successfully"})
	});
}
const Id_Maker = ()=>{
	let ids = Parsed_Posts.map(post => post.id);
	let ID = ids.length + 1;
	while(ids.includes(ID)) ID += 1;
	return ID;
}
export default Add_Post