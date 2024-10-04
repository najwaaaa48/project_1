import axios from 'axios';
import React, { useCallback, useEffect, useReducer } from 'react'
import { useSearchParams } from 'react-router-dom';
import { NegaraView } from './NegaraView';

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

export const Negara = () => {
    const [state, dispatch] = useReducer(reducer, nilaiDefault);

    const [cari, setCari] = useSearchParams();
    const cariNegara = cari.get("cariNegara");
    const ambilNegara = async () => {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/countries"
        );
        const data = await response.data;
        // setResto(data);
        dispatch({ type: "FETCH_BERHASIL", payload: data });
      };
    
      const ubahCari = useCallback(
        async (input) => {
          setCari({ cariNegara: input });
    
          const response = await axios.get(
            "https://freetestapi.com/api/v1/countries?search=" + cariNegara
          );
          const data = await response.data;
          // setHasilCari(data);
          dispatch({ type: "SET_FILTER", payload: data });
        },
        [cariNegara]
      );

      useEffect(() => {
        if (!cariNegara) {
          ambilNegara();
        } else {
          ubahCari(cariNegara);
        }
      }, [cariNegara]);
    
      const hasilFilter = cariNegara ? state.filterData : state.data;
    
      console.log(state);
    
  return (
    <div>
      <NegaraView 
      cariNegara={cariNegara}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
      />
    </div>
  )
}
