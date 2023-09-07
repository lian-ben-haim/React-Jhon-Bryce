import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import { NavLink } from "react-router-dom";
import EditProduct from "../EditProduct/EditProduct";

function ProductDetails(): JSX.Element {

    const params = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const id = +params.id; // Route params
                const product = await productsService.getOneProduct(id);
                setProduct(product);
            }
            catch (err: any) {
                alert(err.message);
            }
        })();
    }, []);

    async function deleteMe() {
        try {
            const sure = window.confirm("Are you sure?");
            
            if (!sure) {
                return;
            }

            await productsService.deleteProduct(product.id);
            alert("product has been deleted!");
            navigate("/products");
        } 
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br />
            <NavLink className="NavLink" to="/products">Back</NavLink>
            <NavLink className="NavLink" to="#" onClick={deleteMe}>Delete</NavLink>
            <NavLink className="NavLink" to={"/products/edit/" + product?.id}>Edit</NavLink>

        </div>
    );
}

export default ProductDetails;
