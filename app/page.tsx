import Filterproducts from "@/components/Filter";
import Navbar from "@/components/Navbar";
import Items from "./products";
import { GetsProducts } from "./services/gets";
export default async function Home() {
  const dato = await GetsProducts();
  const data = dato;
  const products = { Product: data.concat(data) };
  return (
    <main className="bg-white ">
      <div>
        <Navbar />
      </div>
      <section>
        <Filterproducts />
      </section>
      <section>
        <Items products={data} />
      </section>
    </main>
  );
}
