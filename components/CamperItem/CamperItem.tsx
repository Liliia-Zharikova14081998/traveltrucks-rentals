import { Card } from "@/types/card";
import css from "./CamperItem.module.css";
import Link from "next/link";
import { useFavoritesStore } from "@/lib/stores/useFavoritesStore";
import { useEffect, useState } from "react";

interface CamperItemProps {
  item: Card;
}

const CamperItem = ({ item }: CamperItemProps) => {
    const mainImage = item.gallery[0].thumb;

    const [mounted, setMounted] = useState(false);
    const { favorites, toggleFavorite } = useFavoritesStore();

    useEffect(() => {
        setMounted(true);
    }, []); 

    const isFavorite = mounted ? favorites.includes(item.id) : false;

    const heartBtn = mounted && isFavorite ? `${css.heartBtn} ${css.active}` : css.heartBtn;
    
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    toggleFavorite(item.id);
    };
    
    return (
        <div className={css.card}>

            <div className={css.imageWrapper}>
                <img src={mainImage} alt={item.name} className={css.image} />
            </div>

            <div className={css.cardContent}>

                <div className={css.cardHeader}>
                    <h3 className={css.cardTitle}>{item.name}</h3>
                    <div className={css.priceWrapper}>
                <p className={css.cardPrice}>€{item.price.toFixed(2)}</p>
                        <button onClick={handleFavoriteClick} className={`${css.heartBtn} button ${isFavorite ? css.active : ''}`}>
                          <svg width="32" height="31">
                        <use href="/symbol-defs.svg#icon-heart" />
                        </svg>
                        </button>
                        </div>
                </div>
            

            <div className={css.infoBar}>

            
                <div className={css.rating}>
                    <svg width="16" height="16" className={css.starIcon}>
                        <use href="/symbol-defs.svg#icon-star" />
                    </svg>
                    <span className={css.ratingText}>{item.rating.toFixed(1)} ({item.reviews.length} Reviews)</span>
                </div>

                <div className={css.locationGroup}>
                    <svg width="16" height="16" className={css.locationIcon}>
                        <use href="/symbol-defs.svg#icon-Vector" />
                    </svg>
                    <span className={css.locationText}>{item.location}</span>
                </div>
            </div>
            
                <p className={css.description}>{item.description}</p>

                <div className={css.features}>

                    <span className={css.featuresItem}>
                        <svg width="20" height="20" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-diagram" />
                        </svg>
                        {item.transmission}
                    </span>

                    <span className={css.featuresItem}>
                        <svg width="20" height="20" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-Group-1" />
                        </svg>
                        {item.engine}
                    </span>

                    {item.AC && (
                    <span className={css.featuresItem}>
                        <svg width="20" height="20" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-wind" />
                        </svg>
                        AC
                    </span>
                    )}
                
                    {item.bathroom && (
                    <span className={css.featuresItem}>
                        <svg width="20" height="20" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-ph_shower" />
                        </svg>
                        Bathroom
                    </span>
                    )}

                      {item.kitchen && (
                    <span className={css.featuresItem}>
                        <svg width="32" height="32" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-Group" />
                        </svg>
                        Kitchen
                    </span>
                    )}

                        {item.TV && (
                    <span className={css.featuresItem}>
                        <svg width="32" height="32" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-tv" />
                        </svg>
                        TV
                    </span>
                    )}

                    {item.radio && (
                    <span className={css.featuresItem}>
                        <svg width="20" height="20" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-ui-radios" />
                        </svg>
                        Radio
                    </span>
                    )}

                    {item.refrigerator && (
                    <span className={css.featuresItem}>
                        <svg width="20" height="20" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-solar_fridge-outline" />
                        </svg>
                        Refrigerator
                    </span>
                    )}

                    {item.microwave && (
                    <span className={css.featuresItem}>
                        <svg width="18" height="16" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-Group-2" />
                        </svg>
                        Microwave
                    </span>
                    )}
                    
                    {item.gas && (
                    <span className={css.featuresItem}>
                        <svg width="19" height="19" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-Group-3" />
                        </svg>
                        Gas
                    </span>
                    )}
                    
                    {item.water && (
                    <span className={css.featuresItem}>
                        <svg width="19" height="19" className={css.featureIcon}>
                            <use href="/symbol-defs.svg#icon-ion_water-outline" />
                        </svg>
                        Water
                    </span>
                    )}
                </div>

                <Link className={`${css.cardBtn} button`} href={`/catalog/${item.id}`}>Show more</Link>
            </div>
        </div>
  );
};

export default CamperItem;