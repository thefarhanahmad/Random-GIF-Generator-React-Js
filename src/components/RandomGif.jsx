import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import useGif from "../hooks/useGif";

export default function RandomGif() {
  const { gif, loader, getData } = useGif();
  return (
    <div>
      <h2 className="text-sm text-stone-50 font-semibold text-center mb-2">
        Generate Gif randomly
      </h2>

      {/* random gif */}
      <div className="bg-green-400 w-96  border-black shadow-md shadow-cyan-700 border rounded-xl gap-2 p-4 overflow-hidden flex items-center flex-col">
        <h2 className="bg-green-600 underline-offset-2 underline text-xl text-white w-full rounded-md p-1 text-center">
          A Random GIFs
        </h2>
        <div className="h-[15.6rem] w-full overflow-hidden rounded-xl flex justify-center items-center">
          {loader ? <Spinner /> : <img src={gif} className="w-full h-full" />}
        </div>
        <button
          onClick={getData}
          className="bg-sky-700 text-white w-1/2 rounded-md text-xl font-semibold p-1"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
