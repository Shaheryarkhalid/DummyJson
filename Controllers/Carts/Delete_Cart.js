import {Carts} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"
import {writeFile} from 'fs'

const Delete_Cart = (req, res)=>{
	let {ID} =req.params;
	if(!ID) return Not_Found_404(req,res);
	let Parsed_Carts = JSON.parse(JSON.stringify(Carts));
	let Cart_to_be_Deleted = Parsed_Carts.find(cart => cart.id === Number(ID));
	if(!Cart_to_be_Deleted) return res.status(404).json({success:false,message:`No cart with ID: ${ID} found`})
	Parsed_Carts = Parsed_Carts.filter(cart => cart.id !== Number(ID));	
	writeFile("./Data/Carts.json", JSON.stringify(Parsed_Carts), error =>{
		if(error) return res.status(401).json({success:false,message:"Internel Server Error"});
		return res.status(202).json({success:true,message:"Deleted Successfull"})
	})
} 
export default Delete_Cart