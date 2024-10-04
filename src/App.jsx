import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import Card from "./components/card";
import { useEffect } from "react";
import axios from "axios";
import Grid from "./components/Grid";
import Makan from "./components/Makan";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import { Profil } from "./pages/Profil";
import "./assets/stylebaru.scss";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productdetail/ProductDetail";
import { Negara } from "./pages/negara/Negara";
import DetailNegara from "./pages/DetailNegara";
import NegaraDetail from "./pages/negaradetail/NegaraDetail";
import ThemeContext from "./components/context/ThemeContext";

function App() {
  const [data, setData] = useState("halo");
  const [resto, setResto] = useState("");

  // const ambilData = async () =>{
  //   const response = await fetch("https://dummyjson.com/products")
  //   const data = await response.json()
  //   setResto(data)
  // }

  const ambilDataAxios = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    setResto(data);
  };
  useEffect(() => {
    // ambilData()
    ambilDataAxios();
  }, []);

  console.log(resto);

  const theme = useState("light");

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
        <Navbar />
      <Routes>
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} />
        <Route path="/product" element={<Product />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/negara" element={<Negara />} />
        <Route path="/detailnegara/:id" element={<NegaraDetail />} />
      </Routes>
      <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
