import JWT from "jsonwebtoken"

const Auth_Checker = (req,res,next) =>{ 
	let Auth_Request = req.headers['authorization'];
	if(!Auth_Request) return res.status(401).json({success:false,message:"No Authentaction Token found in request..."});
	let Token = String(Auth_Request).split(" ")[1];
	JWT.verify(Token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
		if(error) return res.status(403).json({success:false,message:`Un-Authorized Request...`})
		req.user=user;
		next();
	})
}

export default Auth_Checker