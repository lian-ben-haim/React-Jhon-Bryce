import { useEffect, useState } from "react";
import "./OutOfStock.css";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";

function OutOfStock(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]); 

    useEffect(() => {
        productsService.getOutOfStockProducts()
            .then(products => setProducts(products))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="OutOfStock">
			
            <h2>Out Of Stock:</h2>

            { products.map(product => <ProductCard key={product.id} product={product} />) }
        </div>
    );
}

export default OutOfStock;
