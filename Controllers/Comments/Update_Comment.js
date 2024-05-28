import {Comments} from "../../Data/index.js"
import  {writeFile} from "fs"

let Update_Comment = (req, res) => {
	let {ID} = req.params;
	let {body, postId, likes, user } = req.body; 
	if(
		typeof body !== "string" &&
		typeof postId !== "number" &&
		typeof likes !== "number" &&
		typeof user !== "object"
	) return res.status(400).json({success: false, message : "Provided data must of be of valid Data Type. { body : string, postID : number, likes : number, user : { id: number, username: string , fullname : string }"});
	if(user && 
		(
			typeof user.id !== "number" ||
			typeof user.username !== "string" ||
			typeof user.fullName !== "string" 
		)
	) return res.status(400).json({success: false, message : "User must be an object and must have three properties id : number, username: string, fullname: string  ...(values must of same data type.)"});
	let Parsed_Comments = JSON.parse(JSON.stringify(Comments));
	let Comment_to_be_Updated = Parsed_Comments.find(cmnt => cmnt.id === Number(ID));
	if(!Comment_to_be_Updated) return res.status(404).json({succes:false,message:`No Comment found with ID: ${ID}`})
	for(let property in req.body)
	{
		if(Comment_to_be_Updated.hasOwnProperty(property)) Comment_to_be_Updated[property] = req.body[property]
	}
	Parsed_Comments = Parsed_Comments.filter(cmnt => cmnt.id !== Number(ID));
	Parsed_Comments.push(Comment_to_be_Updated);
	Parsed_Comments = JSON.stringify(Parsed_Comments);
	writeFile( "./Data/Comments.json", Parsed_Comments, error =>{
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false,message:"Internal Server Error"})
		}
		return 	res.json({succes:true,data:`Comment with ID: ${ID} is updated`});
	})
}
export default Update_Comment