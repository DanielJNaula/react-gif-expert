import { useState } from "react";
import PropTypes from 'prop-Types';

export const Addcategory = ( { onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');
  const handleOnChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (event) =>{
    event.preventDefault();
    const newInputValue = inputValue.trim();
    
    if (newInputValue.length <= 1) return;

    //setCategories( categories => [...categories, inputValue])
    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={ (event) => handleOnSubmit(event) } aria-label="form">
      <input 
        type="text" 
        placeholder="Buscar Gif"
        value={ inputValue }
        onChange={ (event) => handleOnChangeInput(event) }
      />
    </form>
  )
};

Addcategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
