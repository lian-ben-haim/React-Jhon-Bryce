import { useEffect, useState } from "react";
import "./Top3.css";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";

function Top3(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]); 

    useEffect(() => {
        productsService.getTop3Products()
            .then(products => setProducts(products))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="Top3">

            <h2>Top 3 Products: </h2>

			{products.map(product => <ProductCard key={product.id} product={product} />)}
        
        </div>
    );
}

export default Top3;
