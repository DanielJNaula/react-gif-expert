import { render, screen } from "@testing-library/react";
import { GifGridCategory } from "../../../src/components/GifExpertApp/GifGridCategory";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

jest.mock('../../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  
  const category = 'Dragon Ball'

  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render( <GifGridCategory category={ category } />);

    expect( screen.getByText('Cargando....') ).toBeTruthy();
    expect( screen.getByText(category) ).toBeTruthy();
  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Dragon ball',
        url: 'https://localhost/goku.jpg'
      },
      {
        id: 'abca',
        title: 'Pokemon',
        url: 'https://localhost/pikachu.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false,
    });

    render( <GifGridCategory category={ category } />);
    
    expect( screen.getAllByRole('img').length ).toBe( 2 );
    expect( screen.getByText(gifs[0].title) ).toBeTruthy();
    expect( screen.getByText(gifs[1].title) ).toBeTruthy();
  });
});