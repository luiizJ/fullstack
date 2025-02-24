'use client';
import { Button } from "@/components/ui/button";
import type { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
  products: Pick<Product, 'imageUrl' | 'name'>;
}

export const ProductsHeader = ({products}:ProductHeaderProps) => {
  const {back} = useRouter()
  return(
    <div className="relative w-full h-[332px] ">
    <Button variant="secondary" size="icon" onClick={back}
        className="absolute top-4 left-4 rounded-full z-50">
        <ChevronLeftIcon size={24} />
    </Button>
     <Button variant="secondary" size="icon" 
        className="absolute top-4 right-4 rounded-full z-50">
        <ScrollTextIcon size={24} />
     </Button>
        <Image 
        src={products.imageUrl}
        layout="fill" 
        objectFit="contain" 
        alt={products.name}/>
    </div>
  )
}