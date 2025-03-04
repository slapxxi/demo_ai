import { getProductById } from '@/lib/getProductById';

type ProductPageProps = {
  params: {
    id: string;
  };
};

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id } = params;
  const productData = await getProductById(id);

  if (!productData) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
      <p>Price: ${productData.price}</p>
    </div>
  );
};

export default ProductPage;
