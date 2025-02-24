import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProductsListProps {
  products: Product[];
}

export const ProducsList = ({products}:ProductsListProps) => {
  const {slug} = useParams<{slug:string}>();
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link 
        className="flex items-center justify-between g-10 py-3 border-b"
        key={product.id} 
        href={`/${slug}/menu/${product.id}`}>
          {/*esquerda*/}
          <div>
            <h3 className="text-sm font-medium ">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
            <p className="pt-3 text-sm font-semibold">{new Intl.NumberFormat("pt-BR",{
              style: "currency",
              currency: "BRL"
            }).format(product.price)}</p>
          </div>
          {/*direita*/}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill
            objectFit="contain" 
            className="rounded-lg"/>
          </div>
        </Link>
      ))}
    </div>
  );
}