import {Products} from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Product = (req,res) => {
	let {ID} = req.params;
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	if(ID)
	{
		let product = Parsed_Products.find(pro => pro.id === Number(ID));
		product && product.id ? res.status(200).json({success:true ,data : product}) : res.status(404).json({success:false, message: `No Product with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}

export default Product