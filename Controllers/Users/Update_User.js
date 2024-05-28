import { Users } from "../../Data/index.js";
import { writeFile } from "fs"

const defaultUser = {
	firstName: "",
	lastName: "",
	maidenName: "",
	age: 18,
	gender: "",
	email: "",
	phone: "",
	username: "",
	password: "",
	birthDate: "",
	image: "",
	bloodGroup: "",
	height: 0,
	weight: 0,
	eyeColor: "",
	hair: {
	  color: "",
	  type: ""
	},
	ip: "",
	address: {
	  address: "",
	  city: "",
	  state: "",
	  stateCode: "",
	  postalCode: "",
	  coordinates: {
		lat: 0,
		lng: 0
	  },
	  country: ""
	},
	macAddress: "",
	university: "",
	bank: {
	  cardExpire: "",
	  cardNumber: "",
	  cardType: "",
	  currency: "",
	  iban: ""
	},
	company: {
	  department: "",
	  name: "",
	  title: "",
	  address: {
		address: "",
		city: "",
		stateCode: "",
		state: "",
		postalCode: "",
		coordinates: {
		  lat: 0,
		  lng: 0
		},
		country: ""
	  }
	},
	ein: "",
	ssn: "",
	userAgent: "",
	crypto: {
	  coin: "",
	  wallet: "",
	  network: ""
	},
	role: ""
  };
  
  const hasValidProperties = (body, template) => {
	let hasAtLeastOneProperty = false;
	const isValid = Object.keys(body).every(key => {
	  if (template.hasOwnProperty(key)) {
		hasAtLeastOneProperty = true;
		return typeof body[key] === typeof template[key];
	  }
	  return false;
	});
	return isValid && hasAtLeastOneProperty;
  };

const Update_User = (req, res) => {
	let { ID } = req.params;
	let Parsed_Users = JSON.parse(JSON.stringify(Users));
	let User_to_be_Updated = Parsed_Users.find(user => user.id === Number(ID));
	if(!User_to_be_Updated) return res.status(404).json({succes:false,message:`No User found with ID: ${ID}`})
	if (!hasValidProperties(req.body, defaultUser)) {
		return res.status(400).json({ success: false, message: "Invalid properties or no valid properties provided" });
	}
	for(let property in req.body)
	{
		if(User_to_be_Updated.hasOwnProperty(property)) User_to_be_Updated[property] = req.body[property]
	}
	Parsed_Users = Parsed_Users.filter(user => user.id !== Number(ID));
	Parsed_Users.push(User_to_be_Updated);
	Parsed_Users = JSON.stringify(Parsed_Users);
	writeFile( "./Data/Users.json", Parsed_Users, error =>{
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false,message:"Internal Server Error"})
		}
		return 	res.json({succes:true,data:`User with ID: ${ID} is updated`});
	})
}
export default Update_User