import { Users } from "../../Data/index.js";
import { writeFile } from "fs"
import { Not_Found_404 } from "../index.js"


const Delete_User = (req, res) => { 
	let {ID} =req.params;
	if(!ID) return Not_Found_404(req,res);
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	let User_to_be_Deleted = Parsed_Users.find(usr => usr.id === Number(ID));
	if(!User_to_be_Deleted) return res.status(404).json({success:false,message:`No User with ID: ${ID} found`})
	Parsed_Users = Parsed_Users.filter(usr => usr.id !== Number(ID));	
	writeFile("./Data/Users.json", JSON.stringify(Parsed_Users), error =>{
		if(error) return res.status(401).json({success:false,message:"Internel Server Error"});
		return res.status(202).json({success:true,message:"Deleted Successfull"})
	})
}
export default Delete_User