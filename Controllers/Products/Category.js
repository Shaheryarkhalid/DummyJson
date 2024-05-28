import {Products} from "../../Data/index.js"
import {Not_Found_404} from "../index.js";

const Category = (req,res) => {
	let {category} = req.params;
	let {limit,skip} = req.body;
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	if(req.params && category)
	{
		let Cat_Prods = Parsed_Products.filter(product => product.category.toLowerCase() === category.toLowerCase()  )
		Cat_Prods && Cat_Prods.length > 0 ? res.status(200).json({success:true , data: limit ? Cat_Prods.slice( skip ? skip : 0 , Number(limit)) : Cat_Prods.slice(skip ? skip : 0, 20) }) : res.status(404).json({success:false, message: `No category by the name: ${category}`})
	} 
	category && Not_Found_404(req,res);
}
export default Category