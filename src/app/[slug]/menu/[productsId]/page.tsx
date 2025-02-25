import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ProductsHeader } from "./components/productsHeader";
import { ProductsBody } from "./components/productsBody";

interface ProductsPageProps {
  params: Promise<{slug: string, productsId: string}>
}
const ProductsPage = async ({params}:ProductsPageProps)=>{
  const {slug, productsId} = await params;
  const product = await db.product.findUnique({where: {id: productsId}, 
    include: {restaurant: {
      select:{
        name: true,
        avatarImageUrl: true,
        slug: true,
      },
    },
  },
});
  if(!product) return notFound();
  if(product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) return notFound();
  return(
    <div className="flex flex-col h-full">
   <ProductsHeader products={product}/>
   <ProductsBody products={product}/>
    </div>
)}

export default ProductsPage;