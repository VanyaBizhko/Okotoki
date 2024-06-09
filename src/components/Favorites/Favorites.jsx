import React from "react";
import { FixedSizeList } from "react-window";
import styles from "./Favorites.module.css";
import { ReactComponent as StarFull } from "../../svg/star-full.svg";

export default function Favorites({ favorites, onRemove }) {
  const Row = ({ index, style }) => {
    const item = favorites[index];
    return (
      <div style={style} className={styles.list}>
        <button onClick={() => onRemove(item)} className={styles.btnFav}>
          <StarFull />
        </button>
        <button className={styles.btnCoins}>{item}</button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <FixedSizeList
        height={400}
        itemCount={favorites.length}
        itemSize={40}
        width={"100%"}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}
