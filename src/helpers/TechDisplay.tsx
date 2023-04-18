//Types
import { IIcon } from "./types"


const TechDisplay = ({item}:{item:IIcon}) => {
    console.log(item)
  return (
    <div>
        <p>Proficiency level:</p>
        {item.name}
        </div>
  )
}

export default TechDisplay