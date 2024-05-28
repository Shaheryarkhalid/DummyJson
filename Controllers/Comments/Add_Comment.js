import {Comments} from "../../Data/index.js"
import  {writeFile} from "fs"

let Parsed_Comments = JSON.parse(JSON.stringify(Comments));

const Add_Comment = (req, res) => {
	let {body, postId, likes, user } = req.body; 
	if(
		typeof body !== "string" ||
		typeof postId !== "number" || 
		typeof likes !== "number" ||
		typeof user !== "object" ||
		typeof user.id !== "number" ||
		typeof user.username !== "string" ||
		typeof user.fullName !== "string" 
	) return res.status(400).json({success: false, message : "Provided data must of be of valid Data Type. { body : string, postID : number, likes : number, user : { id: number, username: string , fullname : string }"});
	req.body.id = Id_Maker();
	Parsed_Comments.push(req.body);
	writeFile("./Data/Comments.json",JSON.stringify(Parsed_Comments) , (error, data) => {
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false, message:"Some thing went wrong"})	
		}
		res.status(203).json({success:true,message:"Comment Added Successfully"})
	});
}
const Id_Maker = ()=>{
	let ids = Parsed_Comments.map(cmnt => cmnt.id);
	let ID = ids.length + 1;
	while(ids.includes(ID)) ID += 1;
	return ID;
}
export default Add_Comment