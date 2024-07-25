"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../loading";
import Link from "next/link";

type Products = {
  products: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }[];
  total: number;
  skip: number;
  limit: number;
};

export default function Home() {
  const [products, setProducts] = useState<
    Products | { products: []; total: number; skip: number; limit: number }
  >({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });
  const [index, setIndex] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const initialFetch = useRef(false);

  const fetchData = () => {
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limit: 30, skip: index }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data: Products) => {
        setProducts((prev) => ({
          ...data,
          products: [...prev.products, ...data.products],
        }));
        data.products.length <= 0 && setHasMore(false);
        setIndex((prev) => prev + 30);
      });
  };

  useEffect(() => {
    if (initialFetch.current) return;
    initialFetch.current = true;

    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limit: 20, skip: 0 }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts((prev) => ({
          ...data,
          products: [...prev.products, ...data.products],
        }));
      });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">Products</h1>
      <InfiniteScroll
        className="space-y-8"
        dataLength={products.products.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={
          <p className="my-auto text-center text-lg font-semibold">
            Yay! You have seen it all!
          </p>
        }
      >
        <main className="grid grid-cols-[repeat(auto-fit,250px)] justify-center gap-8">
          {products?.products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <article className="flex min-h-[322px] cursor-pointer flex-col items-start justify-between rounded-xl bg-secondary-50 p-3 shadow-sm transition-all hover:scale-105 hover:shadow-lg">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="aspect-square w-full"
                />
                <div>
                  <h4 className="line-clamp-2 font-semibold">
                    #{product.id} {product.title}
                  </h4>
                  <p>${product.price}</p>
                </div>
              </article>
            </Link>
          ))}
        </main>
      </InfiniteScroll>
    </>
  );
}
