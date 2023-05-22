"use client"

import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Highlight from "@/components/Hightlight/Highlight";
import Sales from "@/components/Sales/Sales";

const fetchProducts = async () => {
  const response = await fetch("/api/products/1");
  const data = await response.json();

};
fetchProducts()


export default function Home() {
  return (
    <>
      <Banner />
      <Highlight />
      <Sales />
      <Categories />
    </>
  )
}
