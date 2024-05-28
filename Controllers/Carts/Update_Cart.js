import {Carts} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"
import {writeFile} from 'fs'

const Update_Cart = (req,res) =>{
	let {ID}=req.params;
	let {total, discountedTotal, userId, totalProducts, totalQuantity, products} = req.body; 
	if(!ID) return Not_Found_404(req,res);
	if( !total &&
		!discountedTotal &&
		!userId &&
		!totalProducts &&
		!totalQuantity &&
		!products ) return res.status(400).json({success:false,message:"Please include the right property that needs to be updated(Porperty should already exist to be able to update)."});
	let Parsed_Carts = JSON.parse(JSON.stringify(Carts));
	let Cart_to_be_Updated = Parsed_Carts.find(cart => cart.id === Number(ID));
	if(!Cart_to_be_Updated) return res.status(404).json({succes:false,message:`No cart found with ID: ${ID}`});
	for(let property in req.body)
	{
		if(Cart_to_be_Updated.hasOwnProperty(property)) Cart_to_be_Updated[property] = req.body[property]
	}
	Parsed_Carts = Parsed_Carts.filter(cart => cart.id !== Number(ID));
	Parsed_Carts.push(Cart_to_be_Updated);
	Parsed_Carts = JSON.stringify(Parsed_Carts);
	writeFile( "./Data/Carts.json", Parsed_Carts, (error)=>{
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false,message:"Internal Server Error"})
		}
		return 	res.json({succes:true,data:`Cart with ID: ${ID} is updated`});
	})
}
export default Update_Cart