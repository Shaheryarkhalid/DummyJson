import {Users} from "../../Data/index.js";

const Filter_Users = (req, res) => {
	let { key, value, limit, skip } = req.query;
	if(!key) return res.status(400).json({success:false,message:"Missing Key..."})
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	key = key.split(".");
	let Result = Parsed_Users.filter(user =>{
		let Temp_Obj = user;
		key.map(k =>{
			if(Temp_Obj.hasOwnProperty(k))
			{
				Temp_Obj=Temp_Obj[k];
			}
		})
		if(Temp_Obj === value) return user
	})
	if(Result.length === 0) return res.status(404).json({success:false,message:"Not Matching Results..."})
	if(limit, skip) return res.status(200).json({success:true,data:Result.slice(skip, limit)});
	if(limit) return res.status(200).json({success:true,data:Result.slice(0, limit)});
	if(skip) return res.status(200).json({success:true,data:Result.slice(skip, skip+20)});
	return res.status(200).json({success:true,data:Result.slice(0,20)});
}
export default Filter_Users