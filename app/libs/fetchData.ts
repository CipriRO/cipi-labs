type Product = {
  id: number;
  title: string;
  price: number;
  description: string,
  thumbnail: string;
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await fetch(
    `https://dummyjson.com/products/${id}?select=id,title,price,description,thumbnail`,
  );
  return res.json();
};
