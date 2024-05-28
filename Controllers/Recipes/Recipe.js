import {Recipes} from "../../Data/index.js"

const Recipe = (req,res) => {
	let {ID} = req.params;
	let Parsed_Recipes = JSON.parse(JSON.stringify(Recipes));
	if(ID)
	{
		let recipe = Parsed_Recipes.find(recpi => recpi.id === Number(ID));
		recipe && recipe.id ? res.status(200).json({success:true ,data : recipe}) : res.status(404).json({success:false, message: `No recipe with ID: ${ID}` });
	}
	!ID && Not_Found_404(req,res);
}
export default Recipe
