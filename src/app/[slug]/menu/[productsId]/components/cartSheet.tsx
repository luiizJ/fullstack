import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { CartItem } from "./cartItem";

export const CartSheet = ()=>{
    const {isOpen,toggleCart,products } = useContext(CartContext);
  return(
    <Sheet open={isOpen} onOpenChange={toggleCart}>
    <SheetContent className="w-[83%]">
      <SheetHeader>
        <SheetTitle className="text-left">Sacola</SheetTitle>
      </SheetHeader>
      <div className="py-5">
      {products.map((product, index)=>(
        <CartItem key={index} product={product}/>
      ),)}
      </div>
    </SheetContent>
  </Sheet>)
}