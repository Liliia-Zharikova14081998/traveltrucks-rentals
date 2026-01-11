'use client';

import css from "./CamperList.module.css";
import { Card } from "@/types/card";
import CamperItem from "../CamperItem/CamperItem";

type Props = {
  campers: Card[];
};

const CamperList = ({ campers }: Props) => {
  if (campers.length === 0) {
    return (
      <div className={css.emptyState}>
        <p className={css.discription}>No campers found matching your filters. Try adjusting them!</p>
      </div>
    );
  }

  return (
    <div className={css.listWrapper}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.listItem}>
            <CamperItem item={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperList;