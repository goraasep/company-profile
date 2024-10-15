"use client";
import { FC, useState } from "react";
import Header from "@/components/layouts/Header";
const Home: FC = () => {
  const [test, setTest] = useState(0);
  const handleClick = () => {
    setTest(test + 1);
  };
  return (
    <div>
      <h1>Home</h1>
      <Header />
      <button onClick={handleClick}>button</button>
      <h1>{test}</h1>
    </div>
  );
};
export default Home;
