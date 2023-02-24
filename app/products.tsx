import products from "./services/get.json";
export default function Items() {
  return (
    <main>
      {products.Products.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <img src={product.img.url as any} alt={product.name} />
        </div>
      ))}
    </main>
  );
}
