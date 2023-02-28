import { Product } from "./services/productslist";
interface Props {
  products: Product[];
}
export default function Items({ products }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 md2:grid-cols-3 sm:grid-cols-2 m-[30px] gap-[30px] ">
      {products.map((product) => (
        <div>
          <div key={product._id} className="border-2">
            <div className="justify-center flex-wrap">
              <img
                src={product.img.url as any}
                alt={product.name}
                width="100%"
                height="auto"
              />
            </div>
            <div className=" border-t-2 mt-[20px]">
              <div className="mt-[15px] ml-[10px] mb-[15px]  ">
                <h2 className="text-[#222222] w-auto ">{product.name}</h2>
                <p className="text-[#857F7F]">{product.category}</p>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-[12px] flex justify-center p-[8px] mt-4  gap-[12px]  text-center bg-[#810DDC]">
            <button className="">
              <span className="text-[#FAF7F7]">Comprar</span>
              <span className="text-[#FAF7F7] pt-[40px] ml-2">
                ${product.cost}
              </span>
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
