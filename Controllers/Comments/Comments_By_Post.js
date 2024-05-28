import {Comments} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Comments_By_Post = (req, res) => {
	let { ID } = req.params;
	let {limit,skip} = req.query;
	let Parsed_Comments = JSON.parse(JSON.stringify(Comments));
	if(ID)
	{
		let comments = Parsed_Comments.filter(cmnt => cmnt.postId === Number(ID));
		if(comments.length === 0) return  res.status(404).json({success:false, message: `No comments for Post with PostID: ${ID}` });
		if(limit && skip) return res.status(200).json({success:true ,data : comments.slice(skip, limit)})
		if(limit) return res.status(200).json({success:true ,data : comments.slice(0, limit)})
		if(skip) return res.status(200).json({success:true ,data : comments.slice(skip, skip + 10)})
		return res.status(200).json({success:true ,data : comments.slice(0, 10)})
	}
	!ID && Not_Found_404(req,res);
}
export default Comments_By_Post