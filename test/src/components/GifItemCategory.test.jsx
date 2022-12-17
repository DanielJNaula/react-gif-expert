import { render, screen } from "@testing-library/react";
import { GifItemCategory } from "../../../src/components/GifExpertApp/GifItemCategory";

describe('Pruebas en componente <GifItemCategory />', () => {
  const title = 'Dragon Ball';
  const url = 'https://gifs/algo';

  test('El componente debe hacer snapshot', () => {
    const {container} = render(<GifItemCategory title={ title } url={ url }/>);

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el alt indicado', () => {
    render(<GifItemCategory title={ title } url={ url }/>);
    const { src, alt } = screen.getByRole('img');
   
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe mostrar el titulo en el componente', () => {
    render(<GifItemCategory title={ title } url={ url }/>);

    expect( screen.getByText( title ).innerHTML ).toBe( title );
  });
});