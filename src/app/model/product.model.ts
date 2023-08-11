import { Category } from './category.model';
export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  creationAt: string;
  updateAt: string;
}

export const emptyProduct: Product = {
  id: '0',
    title: 'default',
    price: 0,
    images: ['assets/image-not-found.png'],
    description: 'default',
    category: {
      id: '-1',
      name: 'default',
      image: 'default',
      creationAt: 'default',
      updateAt: 'default',
    },
    creationAt: 'default',
    updateAt: 'default',
}