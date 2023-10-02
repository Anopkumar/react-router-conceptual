import { useLoaderData } from "react-router-dom";

import Productcard from "./Productcard";


const Products = () => {
   const {products} = useLoaderData()


    return (
        <div>
           <div className="grid grid-cols-3 gap-5 p-5">
           {
                products?.map(product => <Productcard key = {product.id} product={product}></Productcard>)
            }
           
           </div>







        </div>

    );
};

export default Products;