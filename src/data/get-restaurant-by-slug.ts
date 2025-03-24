import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
    const restaurant =await db.restaurant.findUnique({where: {slug: slug}, 
        include:{
        //menuCategories:true Traz as cateogrias tipo um join
        menuCategories:{
            include:{products:true}

        }
    }});
    return restaurant;
}