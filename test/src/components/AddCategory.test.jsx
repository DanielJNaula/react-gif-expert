import { fireEvent, render, screen } from "@testing-library/react"
import { Addcategory } from "../../../src/components/GifExpertApp/AddCategory";

describe('Pruebas en el componente <AddCategory />', () => {
  const textSearch = 'Dragon ball';

  test('Debe de cambiar el valor de la caja de texto', () => {
    render( <Addcategory onNewCategory={ () => {} }/>);
    const input = screen.getByRole('textbox');

    fireEvent.input(input,{ target: { value: textSearch } });

    expect( input.value ).toBe( textSearch );
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const onNewCategory = jest.fn();
    render( <Addcategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input,{ target: { value: textSearch } } );
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( textSearch );
  });

  test('No Debe de llamar onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();
    render( <Addcategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    expect( onNewCategory ).not.toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(0);
  });
});