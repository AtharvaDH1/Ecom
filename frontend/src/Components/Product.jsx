import { useEffect,useState } from "react";
import { useCart } from "../context/CartContext";


function Product() {
  const {addToCart} = useCart();
  const [search, setSearch] = useState("");
  const [products, setProducts]=  useState([]);
  const [loading, setLoading] = useState(true);

useEffect(()=>{
  fetch("http://localhost:5000/products")
  .then((res)=>res.json())
  .then((data)=> {setProducts(data)
      setLoading(false)})
  .catch((err)=> {console.log(err)
      setLoading(false)});
  
  
},[]);

if (loading) {
    return <p>Loading products...</p>;
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>

      {/* 🔍 Search box */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "15px" }}
      />

      {filteredProducts.length === 0 && <p>No products found</p>}

      {filteredProducts.map(product => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>{product.name}</span>

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
