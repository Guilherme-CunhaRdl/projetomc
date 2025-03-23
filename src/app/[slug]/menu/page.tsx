import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKE_AWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-4 z-50 rounded-full"
        >
          <ChevronLeftIcon/>
        </Button>
        <Image src={restaurant?.coverImageUrl} alt={restaurant.name} fill />

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full"
        >
          <ScrollTextIcon/>
        </Button>
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
