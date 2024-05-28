import {Posts} from "../../Data/index.js"
import {writeFile} from "fs"

const Delete_Post = (req, res) =>{
	let {ID} =req.params;
	if(!ID) return Not_Found_404(req,res);
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	let Post_to_be_Deleted = Parsed_Posts.find(post => post.id === Number(ID));
	if(!Post_to_be_Deleted) return res.status(404).json({success:false,message:`No post with ID: ${ID} found`})
	Parsed_Posts = Parsed_Posts.filter(post => post.id !== Number(ID));	
	writeFile("./Data/Posts.json", JSON.stringify(Parsed_Posts), error =>{
		if(error) return res.status(401).json({success:false,message:"Internel Server Error"});
		return res.status(202).json({success:true,message:"Deleted Successfull"})
	})
}
export default Delete_Post