import { TextField, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function AddProduct() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:8080/${slug}`);
      await setData(res.data);
      await setID(data.id);
      await setName(data.name);
      await setQuantity(data.quantity);
      await setPrice(data.price);
    }
    fetchData();
  }, [slug, data.id, data.name, data.quantity, data.price, data.img]);
  function handleClose() {
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        id: Number(id),
        authorname: name,
        bookname: quantity,
        availability: price,
      };
      const res = await axios.post("http://localhost:8080/super", data);
      await console.log(res);
      await setOpen(true);
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  }
  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Edit Book</h1>

          <div className="input-container">
            <TextField
              value={id}
              onChange={(e) => {
                setID(e.target.value);
              }}
              id="outlined-basic"
              label="ID"
              required
              variant="outlined"
            />
          </div>
          <div className="input-container">
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="outlined-basic"
              label="Book Name"
              required
              variant="outlined"
            />
          </div>
          <div className="input-container">
            <TextField
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              id="outlined-basic"
              label="Author Name"
              required
              variant="outlined"
            />
          </div>
          <div className="input-container">
            <TextField
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              id="outlined-basic"
              label="Availability"
              required
              variant="outlined"
            />
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Book successfully added!
            </Alert>
          </Snackbar>
          <LoadingButton loading={loading} type="submit" variant="contained">
            Add Book
          </LoadingButton>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
