export interface Products {
  Products: Product[];
}

export interface Product {
  img: Img;
  _id: string;
  name: string;
  cost: number;
  category: string;
}

export interface Img {
  url: string;
  hdUrl: string;
}
