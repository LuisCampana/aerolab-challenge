import Navbar from "@/components/Navbar";
import Items from "./products";
import { GetsProducts } from "./services/gets";
export default async function Home() {
  const dato = await GetsProducts();
  const data = dato;
  const products = { Product: data.concat(data) };
  return (
    <main className="bg-white ">
      <Navbar />
      <h1 className="text-[#222222]">Hola este es el home</h1>
      <Items products={data} />
    </main>
  );
}
