import React, { useState } from "react";

const SID = () => {
  const [name, setName] = useState("name");
  const [number, setNum] = useState(0);
  const [sid, setSid] = useState(0);
  function getName(e) {
    setName(e.target.value);
  }
  function getID(e) {
    setSid(e.target.value);
  }
  function getNum(e) {
    setNum(e.target.value);
  }
  return (
    <div className="w-full mx-auto md:w-[80%]">
      <h1 className="text-xl font-bold bg-slate-500 text-center">
        Id Card Generator
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 h-40 text-center bg-green-300 flex justify-center items-center">
          <form>
            <label for="fname"> Full Name : </label>
            <input
              className="border-green-500 border-2 focus:border-green-300"
              type="text"
              id="fname"
              name="fname"
              maxLength={25}
              value={name}
              onChange={getName}
            />
            <br />
            <label for="sid"> Student Id : </label>
            <input
              type="tel"
              id="sid"
              name="sid"
              maxLength={8}
              pattern="[0-9]{8}"
              value={sid}
              onChange={getID}
            />
            <br />
            <label for="number">Contact No : </label>
            <input
              type="tel"
              id="number"
              name="number"
              maxLength={10}
              pattern="[0-9]{10}"
              value={number}
              onChange={getNum}
            />
            <br />
          </form>
        </div>

        <section className="w-full flex bg-slate-300 sm:w-1/2">
          <figure
            className="size-40 flex
          justify-center items-center border-2 border-red-300 mr-4"
          >
            <h2 className="text-6xl">&#9977;</h2>
          </figure>
          <div className="my-auto">
            <h2>
              Full Name : <span className="font-bold">{name}</span>
            </h2>
            <h2>
              Student ID : <span className="font-bold">{sid}</span>
            </h2>
            <h2>
              Contact No : <span className="font-bold">{number}</span>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SID;
