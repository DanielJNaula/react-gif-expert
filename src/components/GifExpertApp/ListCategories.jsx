import { GifGridCategory } from "./GifGridCategory"

export const ListCategories = ({ categories }) => {
  return (
      categories.map((category) => <GifGridCategory key={ category } category={ category }/>) 
  )
}
