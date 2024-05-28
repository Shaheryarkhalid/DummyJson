import { Quotes } from "../../Data/index.js"
import {Not_Found_404} from "../index.js"

const Quote = (req, res) => {
	let { ID } =req.params;
	let Parsed_Quotes = JSON.parse(JSON.stringify(Quotes));
	if(ID)
	{
		let quote = Parsed_Quotes.find(quote => quote.id === Number(ID));
		quote && quote.id ? res.status(200).json({success:true ,data : quote}) : res.status(404).json({success:false, message: `No Quote with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}
export default Quote