import React from 'react'
import { Link } from 'react-router-dom';

const BerandaView = ({ubahCari, cariResto, hasilCari, hasilFilter}) => {
    return (
        <div className="flex flex-col dark:bg-black">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                  et a id nisi.
                </p>
                <button className="btn btn-info">
                  <Link to="/detail/:id">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
    
          <div className="flex flex-col justify-center pt-12 bg-cyan-100 dark:bg-black">
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
              <div className="">
                <p>
                  Hasil dari : {cariResto}, ditemukan : {hasilCari?.founded}
                </p>
              </div>
            </div>
    
            <div className="grid grid-cols-3 gap-3 pb-10">
              {hasilFilter?.restaurants?.map((data) => (
                <div className="card bg-cyan-200 dark:bg-slate-400 w-85 shadow-xl" key={data?.name}>
                  <figure>
                    <img
                      src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p className="line-clamp-1">{data.description}</p>
                    <div className="card-actions justify-end">
                      <Link to={"/detail/" + data.id} className="btn btn-info">
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

export default BerandaView