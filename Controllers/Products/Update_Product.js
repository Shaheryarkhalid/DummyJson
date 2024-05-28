import {Products} from "../../Data/index.js"
import {writeFile} from "fs"
import {Not_Found_404} from "../index.js"

const Update_Product = (req,res) =>{
	let {ID} = req.params;
	let {title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body; 
	if(!ID) return Not_Found_404(req,res);
	if( !title &&
		!description &&
		!price &&
		!discountPercentage &&
		!rating &&
		!stock &&
		!brand &&
		!category &&
		!thumbnail &&
		!images ) return res.status(400).json({success:false,message:"Please include the right property that needs to be updated(Porperty should already exist to be able to update)."});
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	let Product_to_be_Updated = Parsed_Products.find(product => product.id === Number(ID));
	if(!Product_to_be_Updated) return res.status(404).json({succes:false,message:`No product found with ID: ${ID}`})
	for(let property in req.body)
	{
		if(Product_to_be_Updated.hasOwnProperty(property)) Product_to_be_Updated[property] = req.body[property]
	}
	Parsed_Products = Parsed_Products.filter(product => product.id !== Number(ID));
	Parsed_Products.push(Product_to_be_Updated);
	Parsed_Products = JSON.stringify(Parsed_Products);
	writeFile( "./Data/Products.json", Parsed_Products, error =>{
		if(error)
		{
			console.log(error);
			return res.status(401).json({success:false,message:"Internal Server Error"})
		}
		return 	res.json({succes:true,data:`Product with ID: ${ID} is updated`});
	})
}
export default Update_Product