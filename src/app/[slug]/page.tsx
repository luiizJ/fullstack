import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { notFound } from "next/navigation";
import { CardsOptions } from "./components/cards-options";
import Image from "next/image";

interface RestaurantPageProps {
  params: Promise<{slug: string}>
}

const RestaurantPage = async ({params}:RestaurantPageProps) => {
  const {slug} = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) notFound();
  return(
    <div className="h-screen flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-2 pb-12">
        <Image 
        src={restaurant?.avatarImageUrl} 
        alt={restaurant?.name} width={82} height={82} />
          <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="pt-23 text-center space-y-2">
        <h3 className="text-2xl">Bem Vindo</h3>
          <p className="opacity-2">
            Escolha como prefere aproveitar sua refeiçao
          </p>
      </div>
        <div className="pt-14 grid grid-cols-2 gap-4">
          <CardsOptions 
          slug={slug}
          UrlImage="/dine_in.png"
          AltDescription="Dine In"
          buttonText="Comer no local"
          options="DINE_IN"
          />
          <CardsOptions
          slug={slug}
          UrlImage="/takeaway.png"
          AltDescription="Takeaway"
          buttonText="Delivery"
          options="TAKEAWAY"
          />
        </div>
    </div>
  )
};

export default RestaurantPage;