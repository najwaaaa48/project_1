export const Button = ({text}) => {
    try {
        return (
        <div>
            <button>{text}</button>
        </div>    
          ) 
    } catch (error) {
       console.log(error) 
    }
 
}
