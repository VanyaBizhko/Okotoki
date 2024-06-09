import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Favorites from "../Favorites/Favorites";
import List from "../List/List";
import style from "./Controller.module.css";
import { ReactComponent as StarFull } from "../../svg/star-full.svg";

export default function Controller() {
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleAddToFavorites = (item) => {
    if (!favorites.includes(item)) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  const handleRemoveFromFavorites = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav !== item)
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.dropdown}>
      <SearchBar onSearch={handleSearch} />
      <div className={style.btns}>
        <button
          className={style.category}
          onClick={() => handleTabChange("favorites")}
        >
          {activeTab === "favorites" ? (
            <>
              <StarFull /> <b className={style.favTxt}>FAVORITES</b>
            </>
          ) : (
            <>
              <StarFull /> <span className={style.favTxt}>FAVORITES</span>
            </>
          )}
        </button>
        <button
          className={style.categoryAll}
          onClick={() => handleTabChange("all")}
        >
          {activeTab === "all" ? (
            <b className={style.coinsTxt}>ALL COINS</b>
          ) : (
            <span className={style.coinsTxt}>ALL COINS</span>
          )}{" "}
        </button>
      </div>
      {activeTab === "favorites" ? (
        <Favorites favorites={favorites} onRemove={handleRemoveFromFavorites} />
      ) : (
        <List
          searchValue={searchValue}
          onAddToFavorites={handleAddToFavorites}
          favorites={favorites}
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
      )}
    </div>
  );
}
