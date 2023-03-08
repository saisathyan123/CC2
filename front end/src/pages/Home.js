import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/super");
      await setData(res.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="product-headers">
        <p>Author Name</p>
        <p>Book Name</p>
        <p>Availability</p>
        <p>Actions</p>
      </div>
      {data.map((book, index) => (
        <ProductCard key={index} data={book} />
      ))}
    </div>
  );
}

export default Home;
