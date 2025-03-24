"use client";//Isso tranforma a parte em um client component, 
//o client component é um componente que é renderizado no lado do cliente, ou seja, no navegador do usuário.  
//Ele é usado para criar interações dinâmicas, como exibir ou ocultar elementos, adicionar ou remover classes, etc. ESSE CHAT É UM ABSURDO


import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
    const router = useRouter();
    const haddleBackClick = () => router.back();
    return <div className="relative h-[250px] w-full">
    <Button
      variant="secondary"
      size="icon"
      className="absolute left-4 top-4 z-50 rounded-full"
      onClick={haddleBackClick}
    >
      <ChevronLeftIcon />
    </Button>
    <Image src={restaurant?.coverImageUrl} alt={restaurant.name} fill />

    <Button
      variant="secondary"
      size="icon"
      className="absolute right-4 top-4 z-50 rounded-full"
    >
      <ScrollTextIcon/>
    </Button>
  </div>;
}
 
export default RestaurantHeader;