import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useContext } from "react";
import { CartContext } from "../../context/cart";

export const CartSheet = ()=>{
    const {isOpen,toggleCart } = useContext(CartContext);
  return(
    <Sheet open={isOpen} onOpenChange={toggleCart}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>you are you</SheetTitle>
        <SheetDescription>are you</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>)
}