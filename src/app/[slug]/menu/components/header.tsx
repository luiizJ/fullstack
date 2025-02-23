"use client"
import { Button } from "@/components/ui/button"
import type { Restaurant } from "@prisma/client"
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface HeaderProps{
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">
}

export const Header = ({restaurant}:HeaderProps) => {
  const {back} = useRouter();

  return(
  <div className="relative h-[270px] w-full">
    <Button variant="secondary" size="icon" onClick={back} 
    className="absolute top-4 left-4 rounded-full z-50">
      <ChevronLeftIcon size={24} />
    </Button>
        <Image src={restaurant?.coverImageUrl} 
        fill 
        alt={restaurant.name}
        className="object-cover"/>
     <Button variant="secondary" size="icon" 
        className="absolute top-4 right-4 rounded-full z-50">
        <ScrollTextIcon size={24} />
     </Button>
  </div>
)}