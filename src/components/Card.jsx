
const Card = ({text, link}) => {
    try {
        return (
            <a href={link}>
                <img src={link} alt="" />
                <h1>{text}</h1>
            </a>
          ) 
    } catch (error) {
       console.log(error) 
    }
}

export default Card