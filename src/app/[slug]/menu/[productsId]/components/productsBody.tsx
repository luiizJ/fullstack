'use client'
import { Button } from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import { currencyFormat } from "@/reusable/currencyFormat";
import type {Prisma} from "@prisma/client"
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductsBodyProps {
  products: Prisma.ProductGetPayload<{include: {restaurant: {
    select: {
      name: true,
      avatarImageUrl: true
    };
  };
};
}>;
}

export const ProductsBody = ({products}: ProductsBodyProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  return(
    <div className="relative z-50 mt-[-1.5rem] overflow-hidden rounded-t-3xl p-5 flex flex-col flex-auto">
      <div className="flex-auto overflow-hidden">
      <div className="flex items-center gap-1">
        <Image src={products.restaurant.avatarImageUrl}
         alt={products.restaurant.name} 
         width={30}
         height={30}/>
         <p className="text-xl text-muted-foreground">{products.restaurant.name}</p>
      </div>
        <h1 className="text-xl mt-1 font-semibold">{products.name}</h1>
        {/*price and quantity*/}
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-semibold">{currencyFormat(products.price)}</h3>
              <div className="flex items-center gap-3 text-center">
                <Button className="h-8 w-8 rounded-xl " variant="outline"
                onClick={handleDecrement}>
                  <ChevronLeftIcon/>
                </Button>
                <p className="text-xl font-semibold w-4">{quantity}</p>
                <Button className="h-8 w-8 rounded-xl " variant="destructive"
                onClick={handleIncrement}>
                  <ChevronRightIcon/>
                </Button>
              </div>
          </div>
          <ScrollArea className="h-full">
          {/*about product*/}
          <div className="mt-6 space-y-3 ">
          <h3 className="font-semibold">Sobre</h3>
          <p className="text-sm text-muted-foreground">{products.description}</p>
        </div>
        {/*ingredients*/}
        <div className="my-6 space-y-3">
          <div className="flex items-center gap-1">
          <ChefHatIcon size={18}/>
          <h3 className="font-semibold">Ingredientes</h3>
          </div>
            <ul className="list-disc px-5 text-sm text-muted-foreground">
              {products.ingredients.map((ingredient, index)=>{
                return(
                  <li key={index} className="">
                    {ingredient}
                  </li>
                )
              })}
            </ul>
          </div> 
          </ScrollArea>
      </div>
        <Button className="rounded-full w-full">
          Adicionar ao carrinho
        </Button>
    </div>
  )
}