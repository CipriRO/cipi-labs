import { getProductById } from "@/app/libs/fetchData";
import Image from "next/image";

const Product = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const data = await getProductById(id);

  return (
    <main>
      <Image src={data?.thumbnail} alt={data?.title} width={200} height={200} />
      <h1>{data?.title}</h1>
      <p>${data?.price}</p>
      <p>{data?.description}</p>
    </main>
  );
};
export default Product;
