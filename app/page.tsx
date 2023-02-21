import { useEffect } from "react";
import Items from "./products";
import { Gets } from "./services/gets";

export default async function Home({ data }) {
  useEffect(() => {
    Gets();
  }, []);
  return (
    <main>
      <h1>Hola este es el home</h1>
      <Items items={data} />
    </main>
  );
}
