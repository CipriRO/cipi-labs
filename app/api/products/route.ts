export async function POST(request: Request) {
  const data = await request.json();
  const res = await fetch(
    `https://dummyjson.com/products?limit=${data.limit}&skip=${data.skip}&select=id,title,price,thumbnail`,
  );
  const newData = await res.json();

  return Response.json(newData);
}
