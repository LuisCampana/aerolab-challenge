import { Products } from "./services/productslist";

interface Props {
  items: Products;
}
export default function Items({ items }: Props) {
  console.log(items);
  return (
    <main>
      {items.product?.map((product) => (
        <ul id={product._id}>
          <img src={product.img.url} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.cost}</p>
        </ul>
      ))}
      {JSON.stringify(items)}
    </main>
  );
}
