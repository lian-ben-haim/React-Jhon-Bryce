import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import Top3 from "../../ProductsArea/Top3/Top3";
import OutOfStock from "../../ProductsArea/OutOfStock/OutOfStock";

function Routing(): JSX.Element {

    function delay() {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    const LazyAbout = lazy(async () => {
        await delay();
        return import("../../AboutArea/About/About")
    });

    return (
        <div className="Routing">
            <Routes>

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />

                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<ProductList />} />

                <Route path="/products/top3" element={<Top3 />} />

                <Route path="/products/out-of-stock" element={<OutOfStock />} />

                <Route path="/products/details/:id" element={<ProductDetails />} />

                <Route path="/products/edit/:id" element={<EditProduct />} />

                <Route path="/products/add" element={<AddProduct />} />

                <Route path="/employees" element={<EmployeesList/>}/>

                {/* Eager Loading */}
                {/* <Route path="/about" element={<About />} /> */}

                {/* Lazy Loading: */}
                <Route path="/about" element={
                    <Suspense fallback={<Spinner />}>
                        <LazyAbout />
                    </Suspense>
                } />

                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="*" element={<Page404 />} />

            </Routes>
        </div>
    );
}

export default Routing;
