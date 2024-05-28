import {Comments} from "../../Data/index.js"
import  {writeFile} from "fs"

const Delete_Comment = (req, res) => {
	let {ID} =req.params;
	if(!ID) return Not_Found_404(req,res);
	let Parsed_Comments = JSON.parse(JSON.stringify(Comments));
	let Comment_to_be_Deleted = Parsed_Comments.find(cmnt => cmnt.id === Number(ID));
	if(!Comment_to_be_Deleted) return res.status(404).json({success:false,message:`No Comment with ID: ${ID} found`})
	Parsed_Comments = Parsed_Comments.filter(cmnt => cmnt.id !== Number(ID));	
	writeFile("./Data/Comments.json", JSON.stringify(Parsed_Comments), error =>{
		if(error) return res.status(401).json({success:false,message:"Internel Server Error"});
		return res.status(202).json({success:true,message:"Deleted Successfull"})
	})
}
export default Delete_Comment