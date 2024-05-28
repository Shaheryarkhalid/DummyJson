import {Products} from "../../Data/index.js"
import {writeFile} from "fs"

const Parsed_Products = JSON.parse(JSON.stringify(Products));

const Add_Product = (req,res)=>{
	console.log("Working");
	let {title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body; 
	if(
		typeof title !== "string" ||
		typeof description !== "string" || 
		typeof price !== "number" || 
		typeof discountPercentage !== "number" ||
		typeof rating !== "number" || 
		typeof stock !== "number" || 
		typeof brand !== "string" || 
		typeof category !== "string" || 
		typeof thumbnail !== "string" || 
		!Array.isArray(images)
	) return res.status(400).json({success: false, message : "Invalid input data"});
	
	if(
		title === "" ||
		description === "" ||
		brand === "" || 
		category === "" || 
		thumbnail === "" 
	) return res.status(400).json({success: false, message : "Values should not be empty"});

	req.body.id = Id_Maker();
	Parsed_Products.push(req.body);
	writeFile("./Data/Products.json",JSON.stringify(Parsed_Products) , (error, data) => {
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false, message:"Some thing went wrong"})	
		}
		res.status(203).json({success:true,message:"Product Added Successfully"})
	});
}	
const Id_Maker = ()=>{
	let ids =Parsed_Products.map(product => product.id);
	let ID = ids.length + 1;
	while(ids.includes(ID)) ID += 1;
	return ID;
}
export default Add_Product