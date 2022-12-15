import { useEffect, useState } from "react";
import { getGifsByCategory } from "../helpers/getGifsByCategory";

export const useFetchGifs = ( category ) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleNewGifs = async() => {
    const newGifs = await getGifsByCategory( category );
    setGifs(newGifs);
    setIsLoading(false)
  };
  
  useEffect(() => {
    handleNewGifs();
  }, []);

  return {
      gifs,
      isLoading
  }    
}
