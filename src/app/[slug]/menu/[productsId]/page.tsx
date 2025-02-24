import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ProductsHeader } from "./components/productsHeader";

interface ProductsPageProps {
  params: Promise<{slug: string, productsId: string}>
}
const ProductsPage = async ({params}:ProductsPageProps)=>{
  const {slug, productsId} = await params;
  const product = await db.product.findUnique({where: {id: productsId}});
  if(!product) return notFound();
  return(
    <>
   <ProductsHeader products={product}/>
    {slug}
    </>
)}

export default ProductsPage;