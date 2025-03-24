import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductsProps {
    products: Product[];
}

const Products = ({products}:ProductsProps) => {
    return ( 
        <div className="space-y-3">
       

        </div> 
    );
}
 
export default Products;