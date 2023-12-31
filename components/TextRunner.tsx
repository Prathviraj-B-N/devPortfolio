"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const TextRunner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "<MTech @ IIIT Bangalore/>",
      "Full = (Stack) => {Developer} ",
      "Bike Rides and Anime 👾 ",
    ],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 50,
  });
  return (
    <h1 className="text-slate-300 text-2xl lg:text-6xl font-semibold px-10">
      <span>{text}</span>
      <Cursor cursorStyle=";" cursorColor="#80ed9d" cursorBlinking={true} />
    </h1>
  );
};

export default TextRunner;