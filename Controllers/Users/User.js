import {Users} from "../../Data/index.js";

const User = (req, res) =>{
	let {ID} = req.params;
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	if(ID)
	{
		let user = Parsed_Users.find(user => user.id === Number(ID));
		user && user.id ? res.status(200).json({success:true ,data : user}) : res.status(404).json({success:false, message: `No User with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}
export default User