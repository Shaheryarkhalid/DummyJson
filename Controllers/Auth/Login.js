import {Users} from "../../Data/index.js";
import JWT from "jsonwebtoken"

const Login = (req,res) =>{
	let {Email, Password} = req.body;
	if(!Email || !Password) return res.status(401).json({success:false,message:"Email or Password Missing..."});
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	let User_To_Be_Logged_In = Parsed_Users.find(user => user.email.toLowerCase() === Email.toLowerCase());
	if(!User_To_Be_Logged_In) return res.status(401).json({success:false,message:`No user found with Email : ${Email}$`});
	if(User_To_Be_Logged_In.password !== Password) return res.status(401).json({success:false,message:`Wrong Password`});
	let Auth_Token = Auth_Token_Generator(User_To_Be_Logged_In);
	res.status(200).json({success:true,data:{Token:Auth_Token}});
}
function Auth_Token_Generator(User)
{
	return JWT.sign(User, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "59m"})
}
export default Login