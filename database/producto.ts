//creamos una interfaz para indicar el tipo de producto 
interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    color: ValidColor[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'Maquillaje' | 'Cuidado personal' | 'Accesorios';
  }
  
  type ValidColor = 'Pasteles' | 'Bibrantes' | 'Oscuros';
  type ValidTypes = 'Mascaras de pestañas y Delineadores' | 'Sombras' | 'Labiales y Brillos'|'Iluminadores y Rubores' | 'Bolsos,Calcetines, Billeteras, Organizadores' | 'Joyeria';
 
  //creamos una interfaz para agregar caracteristicas de los productos 
  interface SeedData {
    products: SeedProduct[];
  }
  
  export const initialData: SeedData = {
    products: [
      {
        description:
          'Mascará de pestañas resistente al agua, máxima duración (12 horas), libre de parabenos, no testados en animales, dermatológicamente comprobados. .',
        images: ['c:\Users\ANGELICA BELTRAN\OneDrive - Corporacion Universitaria Iberoamericana\Escritorio\Imagenes del proyecto\Tuxido Maskara.jpg'],
        inStock: 5,
        price: 32000,
        sizes: ['Pasteles'],
        slug: 'Para una mirada con mayor expresión',
        type: 'Mascaras de pestañas y Delineadores',
        tags: ['sweatshirt'],
        title: 'Tuxedo Maskaras',
        gender: 'Maquillaje',
      },
      {
        description:
          'Labial ultrabrillante ¡Proporciona un brillo extremo con una sensación similar a la de un cojín y sin sensación pegajosa! Este brillo suaviza y acondiciona los labios y los deja con un aspecto hermoso y saludable. Acabado nacarado, peso neto 3,0 g (0,11 oz).',
        images: ['Angular_M1_B.jpg', 'Angular_M1_B.jpg'],
        inStock: 10,
        price: 20000,
        sizes: ['Bibrantes'],
        slug: 'camiseta-logo-cent-developer-angular',
        type: 'camisetas',
        tags: ['angular'],
        title: 'Bunny Moon',
        gender: 'Maquillaje',
      },
      
    ],
  };