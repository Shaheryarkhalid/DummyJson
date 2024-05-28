import {Posts} from "../../Data/index.js"

const Post_By_User = (req, res) =>{
	let {ID} = req.params;
	let {limit,skip} = req.query;
	let Parsed_Posts = JSON.parse(JSON.stringify(Posts));
	if(ID)
	{
		let posts = Parsed_Posts.filter(post => post.userId === Number(ID));
		if(posts.length === 0) return  res.status(404).json({success:false, message: `No post from User with UserID: ${ID}` });
		if(limit && skip) return res.status(200).json({success:true ,data : posts.slice(skip, limit)})
		if(limit) return res.status(200).json({success:true ,data : posts.slice(0, limit)})
		if(skip) return res.status(200).json({success:true ,data : posts.slice(skip, skip + 10)})
		return res.status(200).json({success:true ,data : posts.slice(0, 10)})
	}
	!ID && Not_Found_404(req,res);
}
export default Post_By_User