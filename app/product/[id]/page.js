import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain max-h-[500px] mx-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}