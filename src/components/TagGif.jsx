import { useState } from "react";
import Spinner from "../components/Spinner";
import useGif from "../hooks/useGif";

export default function TagGif() {
  const [tag, setTag] = useState("");
  const { gif, loader, getData } = useGif(tag);

  //   function to update tagname on change handler
  function tagGifGenerator(event) {
    setTag(event.target.value);
  }

  return (
    <div>
      <h2 className="text-sm text-stone-50 font-semibold text-center mb-2">
        Generate Gif by search the gifs name
      </h2>
      {/* random gif */}
      <div className="bg-green-400 w-96 border-black border shadow-md shadow-cyan-700 h-70 rounded-xl gap-2 p-4 overflow-hidden flex items-center flex-col">
        <h2 className="bg-green-600 underline underline-offset-2 text-xl text-white w-full rounded-md p-1 text-center">
          Random <span className="text-xl font-bold uppercase">{tag}</span> GIFs
        </h2>
        <div className="h-52 w-full overflow-hidden rounded-xl flex justify-center items-center">
          {loader ? <Spinner /> : <img src={gif} className="w-full h-full" />}
        </div>
        <input
          type="text"
          onChange={tagGifGenerator}
          value={tag}
          className=" text-black text-center w-1/2 rounded-md  font-semibold p-1"
        />
        <button
          onClick={() => getData()}
          className="bg-sky-700 text-white w-1/2 rounded-md text-xl font-semibold p-1"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
