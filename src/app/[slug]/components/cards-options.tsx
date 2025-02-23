import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { ConsumptionMethod } from "@prisma/client";
import Image from "next/image"
import Link from "next/link";

interface CardsOptionsProps {
  slug: string;
  buttonText: string;
  UrlImage: string;
  AltDescription: string;
  options: ConsumptionMethod;
}

export const CardsOptions = ({slug, AltDescription,UrlImage,buttonText, options}:CardsOptionsProps) => {
  return (
  <Card>
            <CardContent className="flex flex-col items-center gap-8 py-8">
            <div className="relative h-[80px] w-[80px]">
              <Image 
              src={UrlImage} 
              alt={AltDescription} 
              fill
              className="object-contain">
              </Image>
              </div>
              <Button 
              asChild
              className="rounded-full" 
              variant="secondary">
                <Link href={`/${slug}/menu?consumptionMethod=${options}`}>
                { buttonText }
                </Link>
              </Button>
            </CardContent>
          </Card>
)}