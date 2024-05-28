import {Carts} from "../../Data/index.js"
import {writeFile} from "fs"

let Parsed_Carts = JSON.parse(JSON.stringify(Carts));

const Add_Cart = (req,res) => {
	let {total, discountedTotal, userId, totalProducts, totalQuantity, products} = req.body; 
	if(
		typeof total !== "number" ||
		typeof discountedTotal !== "number" || 
		typeof userId !== "number" || 
		typeof totalProducts !== "number" ||
		typeof totalQuantity !== "number" ||
		!Array.isArray(products)
	) return res.status(400).json({success: false, message : "Invalid input data"});
	req.body.id=Id_Maker();
	Parsed_Carts.push(req.body);
	writeFile("./Data/Carts.json",JSON.stringify(Parsed_Carts) , error => {
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false, message:"Some thing went wrong"})	
		}
		res.status(200).json({success:true,message:"Cart Added Successfully"})
		console.log("Cart Updated Successfully");
	});
}
const Id_Maker = ()=>{
	let ids =Parsed_Carts.map(crt => crt.id);
	let ID = ids.length + 1;
	while(ids.includes(ID)) ID += 1;
	return ID;
}
export default Add_Cart