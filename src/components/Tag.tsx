interface IProps {
    children:string,
    color:string,

}

const Tag = ({children,color}:IProps) => {
  return (
    <span className='tag' style={{color:`${color}`,borderColor:`${color}`}} >
        {children}
    </span>
  )
}

export default Tag