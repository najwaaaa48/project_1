import React from 'react'
import { Link } from 'react-router-dom'

export const NegaraView = ({ubahCari, cariNegara, hasilCari, hasilFilter}) => {
  return (
    <div>
        <div className="flex flex-col justify-center pt-12 bg-cyan-100">
            <div className="flex justify-center">
              <label className="input input-bordered flex items-center gap-2 mb-8 w-[500px] ">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search"
                  onChange={(input) => ubahCari(input.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
    
            <div className="grid grid-cols-3 gap-3 pb-10">
              {hasilFilter?.map((data) => (
                <div className="card bg-base-100 w-85 shadow-xl" key={data?.name}>
                  <figure>
                    <img
                      src={data.flag}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">{data.name}</h2>
                    <p className="line-clamp-1 text-left">{data.currency}</p>
                    <div className="card-actions justify-end">
                      <Link to={"/detailnegara/" + data.id} className="btn btn-info">
                        Show More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
}
