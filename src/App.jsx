import React from "react";
import RandomGif from "./components/RandomGif";
import TagGif from "./components/TagGif";

const App = () => {
  return (
    // App
    <div className="flex items-center justify-evenly  flex-col pt-10 bg-cyan-500 h-screen w-full">
      {/* heading */}
      <h1 className="text-4xl bg-cyan-700 text-white border-white border w-3/4 p-2 rounded-xl text-center">
        Random GIF Generator
      </h1>

      {/* gif generator components */}
      <div className="flex w-full h-full items-center justify-evenly">
        <RandomGif />
        <TagGif />
      </div>
    </div>
  );
};

export default App;
