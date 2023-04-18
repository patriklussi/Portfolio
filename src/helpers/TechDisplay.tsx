//Types
import { IIcon } from "./types"


const TechDisplay = ({item}:{item:IIcon}) => {
    console.log(item)
  return (
    <div>
        <p>Proficiency level:</p>
        {item.name}
        <div className="progress">
          <div className="progress-bar">

          </div>
        </div>
        </div>
  )
}

export default TechDisplay