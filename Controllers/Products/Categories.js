import {Products} from "../../Data/index.js"

const Categories = (req,res) => {
	let Parsed_Products = JSON.parse(JSON.stringify(Products));
	let catag = [...new Set(Parsed_Products.map(product => product.category))];
	res.status(200).json({success:true,data: catag});
}
export default Categories