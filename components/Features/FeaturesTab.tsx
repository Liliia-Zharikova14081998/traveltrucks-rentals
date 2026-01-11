"use client";

import { Card } from "@/types/card";
import css from "./FeaturesTab.module.css";

interface FeaturesTabProps {
  item: Card;
}

const FeaturesTab = ({ item }: FeaturesTabProps) => {
  return (
    <div className={css.featuresTab}>
      
      <div className={css.tagsList}>
        <span className={css.tag}>
          <svg width="20" height="20"><use href="/symbol-defs.svg#icon-diagram" /></svg>
          {item.transmission}
        </span>

        <span className={css.tag}>
          <svg width="20" height="20"><use href="/symbol-defs.svg#icon-Group-1" /></svg>
          {item.engine}
        </span>

        {item.AC && (
          <span className={css.tag}>
            <svg width="20" height="20"><use href="/symbol-defs.svg#icon-wind" /></svg>
            AC
          </span>
        )}

                {item.bathroom && (
          <span className={css.tag}>
            <svg width="20" height="20"><use href="/symbol-defs.svg#icon-ph_shower" /></svg>
            Bathroom
          </span>
        )}

        {item.kitchen && (
          <span className={css.tag}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-Group" /></svg>
            Kitchen
          </span>
        )}

        {item.TV && (
          <span className={css.tag}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-tv" /></svg>
            TV
          </span>
        )}

        {item.radio && (
          <span className={css.tag}>
            <svg width="20" height="20"><use href="/symbol-defs.svg#icon-ui-radios" /></svg>
            Radio
          </span>
        )}

        {item.refrigerator && (
          <span className={css.tag}>
            <svg width="20" height="20"><use href="/symbol-defs.svg#icon-solar_fridge-outline" /></svg>
            Refrigerator
          </span>
        )}

        {item.microwave && (
          <span className={css.tag}>
            <svg width="18" height="16"><use href="/symbol-defs.svg#icon-Group-2" /></svg>
            Microwave
          </span>
        )}

        {item.gas && (
          <span className={css.tag}>
            <svg width="19" height="19"><use href="/symbol-defs.svg#icon-Group-3" /></svg>
            Gas
          </span>
        )}

        {item.water && (
          <span className={css.tag}>
            <svg width="19" height="19"><use href="/symbol-defs.svg#icon-ion_water-outline" /></svg>
            Water
          </span>
        )}

      </div>

      <div className={css.vehicleDetails}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <ul className={css.detailsList}>
    
    <li className={css.detailsItem}>
      <span className={css.label}>Form</span>
      <span className={css.value}>{item.form}</span>
    </li>
          <li className={css.detailsItem}>
      <span className={css.label}>Length</span>
      <span className={css.value}>{item.length}</span>
    </li>
          <li className={css.detailsItem}>
      <span className={css.label}>Width</span>
      <span className={css.value}>{item.width}</span>
    </li>
          <li className={css.detailsItem}>
      <span className={css.label}>Height</span>
      <span className={css.value}>{item.height}</span>
    </li>
          <li className={css.detailsItem}>
      <span className={css.label}>Tank</span>
      <span className={css.value}>{item.tank}</span>
    </li>
          <li className={css.detailsItem}>
      <span className={css.label}>Consumption</span>
      <span className={css.value}>{item.consumption}</span>
    </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesTab;