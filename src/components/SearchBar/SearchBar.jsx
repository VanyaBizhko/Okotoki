import React, { useState } from "react";
import { ReactComponent as Search } from "../../svg/search.svg";
import { ReactComponent as Clear } from "../../svg/cross.svg"; 
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <div className={style.input_container}>
      <Search/>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={style.input}
        placeholder="Search..."
      />
      {inputValue && (
        <button onClick={handleClear} className={style.clear}>
          <Clear/>
        </button>
      )}
    </div>
  );
}
