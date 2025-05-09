import {consumptionMethod} from "@prisma/client";
import Image from 'next/image';
import Link from 'next/link';

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
 
 interface consumptionMethodOptionProps{
    slug: string;
imageUrl: string;
imageAlt: string;
buttonText: string;
option: consumptionMethod;
 }

 export const consumptionMethodOption = ({imageUrl, 
    imageAlt,
     buttonText,option,slug}: 
     consumptionMethodOptionProps) => {
    return(
        <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-[80px] w-[80px]">
            <Image src={imageUrl} fill  alt={imageAlt} className="object-contain"/>
            </div>
            <Button asChild>
            <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
           
            
            </Button>

        </CardContent>
    </Card>
    )
 }

 export default consumptionMethodOption;

 