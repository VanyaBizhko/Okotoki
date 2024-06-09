import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import fuzzysearch from "fuzzysearch";
import data from "../../data";
import styles from './List.module.css'
import { ReactComponent as StarFull } from '../../svg/star-full.svg'
import { ReactComponent as StarEmpty} from "../../svg/star-empty.svg";

export default function List({
  searchValue,
  onAddToFavorites,
  favorites,
  onRemoveFromFavorites,
}) {
    data.sort((a, b) => a.localeCompare(b));
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchValue) {
      const result = data.filter((item) =>
        fuzzysearch(searchValue.toLowerCase(), item.toLowerCase())
      );
      setFilteredData(result);
    } else {
      setFilteredData(data);
    }
  }, [searchValue]);

  const isFavorite = (item) => favorites.includes(item);

  const handleButtonClick = (item) => {
    if (isFavorite(item)) {
      onRemoveFromFavorites(item);
    } else {
      onAddToFavorites(item);
    }
  };

  const renderRow = ({ index, style }) => (
    <div style={style}>
      <button onClick={() => handleButtonClick(filteredData[index])}className={styles.btnFav} >
        {isFavorite(filteredData[index]) ? <StarFull /> : <StarEmpty />}
      </button>
      <button className={styles.btnCoins}>{filteredData[index]}</button>
    </div>
  );

  return (
      <div className={styles.container}>
      <FixedSizeList
        height={400}
        itemCount={filteredData.length}
        itemSize={40}
        width={"100%"}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
