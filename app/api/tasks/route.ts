export const GET = async () => {
  const res = await fetch("https://dummyjson.com/todos?limit=5&skip=26");
  const data = await res.json();
  return Response.json(data);
};
