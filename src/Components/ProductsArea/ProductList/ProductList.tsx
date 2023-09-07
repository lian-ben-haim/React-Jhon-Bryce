import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

function ProductList(): JSX.Element {

    useTitle("Products");
    
    // for GLOBAL state use
    // --------------------
    const allProducts = useSelector((appState : AppState) => appState.products);

    useEffect(() => {
        productsService.getAllProducts().catch(err => alert(err.message));
    })

    // for LOCAL state use :
    // --------------------
    // const [allProducts, setAllProducts] = useState<ProductModel[]>([]); 
    //
    // useEffect(() => {
    //     productsService.getAllProducts()
    //         .then(products => setAllProducts(products))
    //         .catch(err => alert(err.message));
    // }, []);

    return (
        <div className="ProductList">

            {allProducts.length === 0 && <Spinner/>}

            {/* Sending data to props: */}
            {allProducts.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}

export default ProductList;
