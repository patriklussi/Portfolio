//Types
import { IIcon } from "./types";

//Helpers
import { generateColor } from "./helpers";
const TechDisplay = ({ item }: { item: IIcon }) => {
  generateColor();
	console.log(item);
	return (
		<div className="Proficiency-box">
			<p>Proficiency level:</p>
			{item.name}
      <div className="flex-item-center-sm">
        <p>Low</p>
      <div className="progress">
		  	<div key={item.id} className={`${"bar"}`}> </div>
			</div>
      <p>High</p>
      </div>
			
		</div>
	);
};

export default TechDisplay;
