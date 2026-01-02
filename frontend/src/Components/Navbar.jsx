import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav style={{display: "flex", gap: "20px", padding: "10px" }}>
            <Link to ="/">Home</Link>
            <Link to ="/product">Product</Link>
            <Link to ="/cart">Cart</Link>
            </nav>
    );
}

export default Navbar;