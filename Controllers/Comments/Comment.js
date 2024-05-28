import {Comments} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Comment =  (req, res) => {
	let { ID } =req.params;
	let Parsed_Comments = JSON.parse(JSON.stringify(Comments));
	if(ID)
	{
		let comment = Parsed_Comments.find(cmnt => cmnt.id === Number(ID));
		comment && comment.id ? res.status(200).json({success:true ,data : comment}) : res.status(404).json({success:false, message: `No Comment with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}
export default Comment