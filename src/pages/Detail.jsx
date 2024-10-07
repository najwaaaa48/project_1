import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [resto, setResto] = useState();
  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/detail/" + id
    );
    const data = await response.data;
    setResto(data);
  };

  useEffect(() => {
    ambilResto();
  }, []);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name}</h1>
    // </div>
    <div className="hero bg-cyan-100 dark:bg-sky-800 min-h-screen ">
    <div className="hero-content text-center space-y-8 flex-col">
      <img
        src={`https://restaurant-api.dicoding.dev/images/large/${resto?.restaurant.pictureId}`}
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold dark:text-white">{resto?.restaurant?.name}</h1>
        <p className="py-6 max-w-[50rem] text-justify dark:text-white">
          {resto?.restaurant?.description}
        </p>
        <button className="btn btn-info dark:bg-slate-500">Get Started</button>
      </div>
    </div>
  </div>
  );
}
