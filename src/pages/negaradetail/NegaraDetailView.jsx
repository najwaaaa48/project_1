import { Link } from "react-router-dom";

export default function NegaraDetailView({ data }) {
    try {
      return (

        <div className="Negara-detail-image bg-cyan-100 dark:bg-sky-800">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 px-24">
            <div className="max-w-lg lg:mx-12 lg:order-2 ">
              <h1 className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                {data?.name}
              </h1>
              <h4 className="mt-4 text-black-600 dark:text-gray-300 font-bold">
                {data?.currency}
              </h4>
              <div className="">
                <p className="mt-4 text-black-600 dark:text-gray-300 font-semibold"
                >
                  {data?.population}
                </p>
              <div className="mt-6">
              <Link to="/negara"><button className="btn btn-info dark:bg-slate-500">Back</button></Link>
              </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-contain w-[500px] h-[300px] max-w-2xl rounded-md "
              src={data?.flag}
              alt={`${data?.name} flag`}
            />
          </div>
        </div>
      </div>
      );
    } catch (error) {
      console.log(error);
    }
  }