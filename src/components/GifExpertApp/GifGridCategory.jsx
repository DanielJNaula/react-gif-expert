import PropTypes from 'prop-types';
import { GifItemCategory } from "./GifItemCategory";
import { useFetchGifs } from "../../hooks/useFetchGifs";

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
};

GifGridCategory.propTypes = {
  category: PropTypes.string.isRequired,
};
