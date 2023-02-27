import { Product } from "./services/productslist";
interface Props {
  products: Product[];
}
export default function Items({ products }: Props) {
  return (
    <main className="grid grid-cols-4">
      {products.map((product) => (
        <div key={product._id} className="border-2 ">
          <div>
            <img src={product.img.url as any} alt={product.name} />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
          <div>
            <button>
              <span>Comprar</span>
              <span>${product.cost}</span>
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
