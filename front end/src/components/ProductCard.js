import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  async function handleDelete() {
    await axios.delete(`http://localhost:8080/super/${props.data.id}`);
  }
  const navigate = useNavigate();
  return (
    <div
      className={
        props.data.id % 2 === 0 ? "product-card colored" : "product-card"
      }
    >
      <p>{props.data.bookname}</p>
      <p>{props.data.authorname}</p>
      <p>{props.data.availability}</p>
      <div>
        <Button
          onClick={() => {
            navigate(`/edit/${props.data.id}`);
          }}
          variant="contained"
        >
          Edit
        </Button>
        <Button onClick={handleDelete} color="error" variant="contained">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
