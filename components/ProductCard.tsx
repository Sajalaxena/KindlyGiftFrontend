import Image from "next/image";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md text-center max-w-xs w-full mx-auto">
      <Image
        src={product.image}
        alt={product.title}
        className="object-cover rounded-lg"
        height={150}
        width={150}
      />
      <h3 className="text-lg font-medium mt-3">{product.title}</h3>
      <p className="text-blue-600 font-semibold my-2">₹{product.price}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
