import {Posts} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Post = (req, res) => {
	let {ID} = req.params;
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	if(ID)
	{
		let post = Parsed_Posts.find(post => post.id === Number(ID));
		post && post.id ? res.status(200).json({success:true ,data : post}) : res.status(404).json({success:false, message: `No post with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}
export default Post