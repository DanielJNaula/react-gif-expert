import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifItemCategory } from "./GifItemCategory";

export const GifGridCategory = ({ category }) => {
  const { gifs, isLoading} = useFetchGifs( category );
  
  return (
    <div>
      <h3>{ category }</h3>
      {
        isLoading && <h2 >Cargando....</h2>
      }
      <div className="card-grid">
        {
          gifs.map((image)=> (
            <GifItemCategory
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>
    </div>
  )
}
