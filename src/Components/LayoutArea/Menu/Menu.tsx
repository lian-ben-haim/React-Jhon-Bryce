import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/products" end >Products</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/products/add">Add Product</NavLink>

            <NavLink to={"/employees"}>Our Employees</NavLink>
            

        </div>
    );
}

export default Menu;
