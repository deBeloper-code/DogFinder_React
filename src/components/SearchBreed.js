import React, { useState } from "react";
import { useFetchListBreed } from "../hooks/useFetchListBreed";

const SearchBreed = ({ setBreed }) => {
  const [inputValue, setInputValue] = useState("");

  //Va a decidir si se dio click o está escribiendo
  const [clickOrWrite, setclickOrWrite] = useState(1);

  const { data: breeds } = useFetchListBreed();

  let nombresRazas = [];

  for (const key in breeds) {
    nombresRazas.push(key);
  }

  const handleSubmit = (e) => {
    setBreed([inputValue]);
    setclickOrWrite(1);
    e.preventDefault();
    scroll();
  };

  const handleInput = (e) => {
    setclickOrWrite(2);
    setInputValue(e.target.value.toLowerCase());
  };

  const nuevaPerros = [];

  for (const k in nombresRazas) {
    if (inputValue !== "") {
      if (nombresRazas[k].indexOf(inputValue) !== -1) {
        nuevaPerros.push(nombresRazas[k]);
      }
    }
  }

  const scroll = () => {
    window.scroll({
      top: 700,
      behavior: "smooth",
    });
  };
  // const [chose, setchose] = useState()
  const escoger = (e) => {
    setInputValue(e.target.innerHTML);
  };

  let nuevaPerrosSI = nuevaPerros.map((perro) => {
    return (
      <li onClick={escoger} key={nuevaPerros.length * Math.random(159)}>
        {perro}
      </li>
    );
  });

  //Cuando toque el input se motrarán las razas que hay
  let listaDeRazas;

  const [lista, setlista] = useState("");
  const handleInputClick = (e) => {
    setlista(e.type);
    setclickOrWrite(3);
  };

  if (lista === "click") {
    listaDeRazas = nombresRazas.map((razas) => {
      return (
        <li onClick={escoger} key={razas.length * Math.random(159)}>
          {razas}
        </li>
      );
    });
  }

  return (
    <div className="containerSeraching">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          onClick={handleInputClick}
         
        />
        <button className="buscar">Search</button>
      </form>
      {clickOrWrite === 3 ? (
        <div className="content-options">
          <ul>{listaDeRazas}</ul>
        </div>
      ) : (
        ""
      )}

      {clickOrWrite === 2 ? (
        <div className="content-options">
          <ul>{nuevaPerrosSI}</ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBreed;
