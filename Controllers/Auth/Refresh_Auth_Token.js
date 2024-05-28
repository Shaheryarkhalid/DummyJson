import JWT from "jsonwebtoken"

const Refresh_Auth_Token = (req,res) =>{
	let Auth_Token = req.headers['authorization'];
	if(!Auth_Token) return res.status(401).json({success:false,message:"No Authorization Token found..."})
	let Token = Auth_Token.split(" ")[1];
	if(!Token) return res.status(401).json({success:false,message:"No Authorization Token found..."})
	JWT.verify(Token, process.env.ACCESS_TOKEN_SECRET, (error, user)=>{
		if(error) return res.status(401).json({succes:false, message:"Invalid Authorization Token..."});
		delete user.exp;
		let New_Token = JWT.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "59m"});
		return res.status(200).json({success : true, data:{Refreshed_Token:New_Token}});
	})
}
export default Refresh_Auth_Token