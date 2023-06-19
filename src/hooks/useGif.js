import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const useGif = (tag) => {
  // importing api key
  const apikey = process.env.REACT_APP_GIPHY_API_KEY;

  // handle state of gif,loader and tags
  const [gif, setGIf] = useState("");
  const [loader, setLoader] = useState("false");

  //   fetching data
  async function getData() {
    setLoader(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}&tag=${tag}&rating=g`;
    try {
      const output = await axios.get(url);
      const content = await output.data.data.images.downsized_large.url;
      setGIf(content);
      setLoader(false);
    } catch (error) {
      console.log("found error ", error);
    }
  }

  //   useeffect hook
  useEffect(() => {
    getData();
  }, []);

  return { gif, loader, getData };
};
export default useGif;
