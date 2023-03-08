import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/");
      await setData(res.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="product-headers">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Actions</p>
      </div>
      {data.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  );
}

export default Home;
