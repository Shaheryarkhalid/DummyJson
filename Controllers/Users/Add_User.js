import { Users } from "../../Data/index.js";
import { writeFile } from "fs"

let Parsed_Users = JSON.parse(JSON.stringify(Users));

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

const ensureProperties = (user) => {
  const validateObject = (obj, template) => {
    for (const key in template) {
      if (typeof template[key] === 'object' && !Array.isArray(template[key])) {
        if (typeof obj[key] !== 'object' || Array.isArray(obj[key])) {
          obj[key] = template[key];
        } else {
          validateObject(obj[key], template[key]);
        }
      } else {
        if (typeof obj[key] !== typeof template[key]) {
          obj[key] = template[key];
        }
      }
    }
  };
  validateObject(user, defaultUser);
  return user;
};
const Add_User = (req, res) => {
	req.body.id = Id_Maker();
	const User_With_Defaults = ensureProperties(req.body);
	Parsed_Users.push(User_With_Defaults);
	writeFile("./Data/Users.json",JSON.stringify(Parsed_Users) , error => {
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false, message:"Some thing went wrong"})	
		}
		res.status(203).json({success:true,message:"User Added Successfully"})
	});

}
const Id_Maker = ()=>{
	let ids = Parsed_Users.map(usr => usr.id);
	let ID = ids.length + 1;
	while(ids.includes(ID)) ID += 1;
	return ID;
}
export default Add_User
