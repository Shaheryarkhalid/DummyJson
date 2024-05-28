import {Products} from "../../Data/index.js"
import {writeFile} from "fs"
import {Not_Found_404} from "../index.js"


let Delete_Product = (req,res)=>{
	let {ID} =req.params;
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	if(!ID) return Not_Found_404(req,res);
	let Product_to_be_Deleted = Parsed_Products.find(product => product.id === Number(ID));
	if(!Product_to_be_Deleted) return res.status(404).json({success:false,message:`No product with ID: ${ID} found`})
	Parsed_Products = Parsed_Products.filter(product => product.id !== Number(ID));	
	writeFile("./Data/Products.json", JSON.stringify(Parsed_Products), error =>{
		if(error) return res.status(401).json({success:false,message:"Internel Server Error"});
		return res.status(202).json({success:true,message:"Deleted Successfull"})
	})
}
export default Delete_Product