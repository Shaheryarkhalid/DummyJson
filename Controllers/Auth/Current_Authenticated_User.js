import JWT from "jsonwebtoken"

const Current_Authenticated_User = (req, res) => {
	let Auth_Request = req.headers['authorization'];
	if(!Auth_Request) return res.status(403).json({success:false,message:"Auth Token Not Found..."});
	let Token = Auth_Request.split(" ")[1];
	JWT.verify(Token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
		if(error) return res.status(403).json({success:false,message:"Invalid Authorzation Token..."});
		delete user.password;
		return res.status(202).json({success:true,data:{User:user}});
	})
}
export default Current_Authenticated_User