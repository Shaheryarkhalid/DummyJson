import {Posts} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"
import {writeFile} from "fs"

const Update_Post = (req,res) =>{
	let {ID} = req.params;
	let {title, body, views, userId, tags, reactions } = req.body; 
	if(!ID) return Not_Found_404(req,res);
	if( !title &&
		!body &&
		!views &&
		!userId &&
		!tags &&
		!reactions ) return res.status(400).json({success:false,message:"Please include the right property that needs to be updated(Porperty should already exist to be able to update)."});
	if(
		(title && typeof title !== "string") ||
		(body && typeof body !== "string") ||
		(views && typeof views !== "number") ||
		(userId && typeof userId !== "number") ||
		(tags &&  !Array.isArray(tags) ) ||
		(reactions &&  (typeof reactions.likes !== "number" || typeof reactions.dislikes !== "number"  )) 
	) return res.status(400).json({success:false,message:"Provided data must of be of valid Data Type. { title : string, body : string, views : number, userId : number, tags : array, reactions : { likes: number, dislikes:number }"});
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	let Post_to_be_Updated = Parsed_Posts.find(post => post.id === Number(ID));
	if(!Post_to_be_Updated) return res.status(404).json({succes:false,message:`No post found with ID: ${ID}`})
	for(let property in req.body)
	{
		if(Post_to_be_Updated.hasOwnProperty(property)) Post_to_be_Updated[property] = req.body[property]
	}
	Parsed_Posts = Parsed_Posts.filter(post => post.id !== Number(ID));
	Parsed_Posts.push(Post_to_be_Updated);
	Parsed_Posts = JSON.stringify(Parsed_Posts);
	writeFile( "./Data/Posts.json", Parsed_Posts, error =>{
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false,message:"Internal Server Error"})
		}
		return 	res.json({succes:true,data:`Post with ID: ${ID} is updated`});
	})
}
export default Update_Post