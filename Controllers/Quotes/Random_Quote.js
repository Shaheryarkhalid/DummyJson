import { Quotes } from "../../Data/index.js"

const Random_Quote = (req, res) => {
	let Parsed_Quotes = JSON.parse(JSON.stringify(Quotes));
	let Random_id= null;
	while(!Parsed_Quotes[Random_id]) Random_id = Math.floor((Math.random() *  Parsed_Quotes.length )+1);
	res.status(200).json({success:true,data:Parsed_Quotes[Random_id]});
}
export default Random_Quote