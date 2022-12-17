import { getGifsByCategory } from "../../../src/helpers/getGifsByCategory";

describe('Pruebas en getGifsByCategory', () => {
  
  test('Debe de reportar un arreglo de gifs', async() => {
    const gifs = await getGifsByCategory('Dragon ball');
    //console.log(gifs);
    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    });
  });  
});