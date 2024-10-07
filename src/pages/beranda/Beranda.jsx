import React, { useCallback, useEffect, useReducer, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import BerandaView from "./BerandaView";
import { data } from "autoprefixer";

const nilaiDefault = {
  data: [],
  filterData: [],
  loading: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BERHASIL":
      return {
        ...state,
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  // const [resto, setResto] = useState();
  // const [hasilCari, setHasilCari] = useState();
  const [cari, setCari] = useSearchParams();
  const cariResto = cari.get("cariResto");
  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  useEffect(() => {
    if (!cariResto) {
      ambilResto();
    } else {
      ubahCari(cariResto);
    }
  }, [cariResto]);

  const ubahCari = useCallback(
    async (input) => {
      setCari({ cariResto: input });

      const response = await axios.get(
        "https://restaurant-api.dicoding.dev/search?q=" + cariResto
      );
      const data = await response.data;
      // setHasilCari(data);
      dispatch({ type: "SET_FILTER", payload: data });
    },
    [cariResto]
  );

  const hasilFilter = cariResto ? state.filterData : state.data;

  console.log(state);

  return (
    <BerandaView
      // cariResto={cariResto}
      // hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Beranda;
