import React, { useState } from 'react';
import style from './App.module.css';
import Controller from './components/Controller/Controller';
import { ReactComponent as Search }  from './svg/search.svg';

function App() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={style.container}>
      <button 
        className={`${style.btn} ${isDropdownVisible ? style.active : ''}`} 
        onClick={toggleDropdown}
      >
        <Search/> 
        <span className={style.search}>SEARCH</span>
      </button>
      {isDropdownVisible && <Controller />}
    </div>
  );
}

export default App;