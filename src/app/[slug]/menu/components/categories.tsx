'use client'
import type {Prisma } from "@prisma/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { ProducsList } from "./productsList";

interface CategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true;
        }
      }
    };
  }>;
}
type CategoriesProducts = Prisma.MenuCategoryGetPayload<{
  include: {
    products: true;
  };
}>
export const Categories = ({restaurant}:CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesProducts>(restaurant.menuCategories[0]);
  const handleCategoryClick =(category: CategoriesProducts) =>{
    setSelectedCategory(category);
  }
  const variantCategory = (Categories: CategoriesProducts) => {
    return selectedCategory.id === Categories.id ? "default" : "secondary";
  }
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white">
    <div className="p-6">
    <div className="flex items-center gap-3">
        <Image src={restaurant.avatarImageUrl} 
        alt={restaurant.name}
        width={45}
        height={45}/>
        <div>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-xs opacity-55">{restaurant.description}</p>
        </div>
      </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-500">
            <ClockIcon size={12} />
            <p>Aberto!</p>
          </div>
    </div>
          <ScrollArea className="w-full">
            <div className="flex w-max space-x-4 p-4 pt-0">
              {restaurant.menuCategories.map((Categories)=>(
                  <Button 
                  onClick={()=>handleCategoryClick(Categories)}
                  key={Categories.id} 
                  variant={variantCategory(Categories)} 
                  size="sm" 
                  className="rounded-full">
                    {Categories.name}
                  </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
          <h3 className="px-5 pt-2 font-semibold">{selectedCategory.name}</h3>
      <ProducsList products={selectedCategory.products}/>
    </div>
  );
};