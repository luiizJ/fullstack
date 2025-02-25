import Image from "next/image";
import type { CartProduct } from "../../context/cart";
import { currencyFormat } from "@/reusable/currencyFormat";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps{
  product: CartProduct;
}

export const CartItem =({product}:CartItemProps)=>{
  return(
    <div className="flex justify-between items-center">
      {/*Esquerda*/}
      <div className="flex items-center gap-3 m-2">
      <div className="relative h-20 w-20">
        <Image
        src={product.imageUrl}
        alt={product.name}
        fill
      />
      </div>
        <div className="space-y-1">
          <p className="text-xs max-w[90%] truncate text-ellipsis">{product.name}</p>
          <p className="font-semibold text-sm">{currencyFormat(product.price)}</p>
            <div className="flex items-center gap-2 text-center">
              <Button className="w-7 h-7 rounded-lg">
                <ChevronLeftIcon/>
              </Button>
              <p className="text-xs w-8">{product.quantity}</p>
              <Button className="w-7 h-7 rounded-lg" variant="destructive">
                <ChevronRightIcon/>
              </Button>
            </div>
        </div> 
      </div>
      {/* direita */}
      <Button className="h-7 w-7 rounded-lg" variant="destructive">
        <TrashIcon/>
      </Button>
    </div>
  )
}