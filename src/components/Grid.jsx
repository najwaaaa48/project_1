import Makan from "./Makan"

const Grid = ({resto}) => {
  try {
    return (
      <>
       <div className="grid grid-cols-4 gap-4">
        {
          resto?.restaurants?.map((dataResto) => {
            return (
              <>
              <Makan name={dataResto.name} description={dataResto.description} image={'https://restaurant-api.dicoding.dev/images/medium/' + dataResto.pictureId} price={dataResto.price} />
               {/* <div>{dataResto.name}</div>
               <img src={'https://restaurant-api.dicoding.dev/images/medium/' + dataResto.pictureId} /> */}
              </>
            )
          })
        }
       </div>
      </>
    )
  } catch (error) {
    console.log(error)
  }
 
}

export default Grid


