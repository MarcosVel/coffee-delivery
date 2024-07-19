type ProductProps = {
  id: string;
  image: number;
  title: string;
  description: string;
  price: number;
  type: string;
};

type CartProps = {
  id: string;
  image: number;
  title: string;
  price: number;
  sizeSelected: number;
  amount: number;
};

export { ProductProps, CartProps };
