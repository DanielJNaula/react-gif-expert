import { useState } from "react"
import { Addcategory, ListCategories } from "../components/GifExpertApp";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
 
  const handleAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
    setCategories( [newCategory, ...categories] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <Addcategory onNewCategory= { (valueInput) => handleAddCategory(valueInput) } />
      <ListCategories categories={ categories } />
    </>
  )
}
