import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-methd-option";
interface RestaurantePageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantePageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* TITULO E LOGO DO MC*/}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />

        <h2 className="font-semibold">{restaurant?.name}</h2>
      </div>

      {/*TEXTO DE BEM VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição . Estamos oferecendo
          praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* BOTOES DE ESCOLHA*/}
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          imageUrl="/dine_in.png"
          imageAlt="Comer Aqui"
          buttonText="Comer Aqui"
        />
        <ConsumptionMethodOption
          option="TAKE_AWAY"
          slug={slug}
          imageUrl="/take_away.png"
          imageAlt="Para Levar"
          buttonText="Para Levar"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
