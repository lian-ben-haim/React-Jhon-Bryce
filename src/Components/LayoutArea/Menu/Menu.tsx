import { NavLink } from "react-router-dom";
import "./Menu.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

function Menu(): JSX.Element {

    const user = useSelector((appState: AppState) => appState.user);

    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/products" end >Products</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/products/add">Add Product</NavLink>

            {user &&
                <NavLink to="/products/top3">Top 3 Products</NavLink>
            }
            
            {user?.role === "Admin" &&
                <NavLink to="/products/out-of-stock">Out Of Stock</NavLink>
            }
            
            <NavLink to={"/employees"}>Our Employees</NavLink>
            
            <TotalProducts />

        </div>
    );
}

export default Menu;
