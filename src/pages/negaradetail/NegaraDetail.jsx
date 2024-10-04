import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NegaraDetailView from "./NegaraDetailView";

export default function NegaraDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  const ambilData = async () => {
    const response = await axios.get(`https://freetestapi.com/api/v1/countries/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    ambilData();
    console.log(id);
    console.log(data);
  }, []);

  return <NegaraDetailView data={data}  />;
}