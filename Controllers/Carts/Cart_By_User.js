import {Carts} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Cart_By_User = (req,res) => {
	let {ID} = req.params;
	let Parsed_Carts = JSON.parse(JSON.stringify(Carts));
	if(ID)
	{
		let cart = Parsed_Carts.find(crt => crt.userId === Number(ID));
		cart && cart.id ? res.status(200).json({success:true ,data : cart}) : res.status(404).json({success:false, message: `No cart for user with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
	res.json("Cart by user...");
}
export default Cart_By_User