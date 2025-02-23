import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Header } from "./components/header";

interface MenuPageProps{
  params: Promise<{slug: string}>
  searchParams: Promise<{consumptionMethod: string}>
}

const isConsumptionMethodValid =(consumptionMethod: string) => {
  return consumptionMethod === "TAKEAWAY" || consumptionMethod === "DINE_IN";
}

const MenuPage = async({params, searchParams}:MenuPageProps) => {
  const {slug} = await params;
  const {consumptionMethod} = await searchParams;
  if(!isConsumptionMethodValid(consumptionMethod)) return notFound();
  const restaurant = await db.restaurant.findUnique({
    where: {slug}
  });
  if(!restaurant){
    return notFound();
  }
  return(
   <div>
      <Header restaurant={restaurant}/>
   </div>
  )
}

export default MenuPage;
// "http://localhost:3000/api/restaurants/1/menu?consumptionMethod=TAKEAWAY"                                                                    