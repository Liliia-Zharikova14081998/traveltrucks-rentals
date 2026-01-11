'use client';

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCardById } from "@/lib/api";
import FeaturesTab from "@/components/Features/FeaturesTab";
import ReviewsTab from "@/components/Reviews/ReviewsTab";
import BookingForm from "@/components/BookingForm/BookingForm";
import css from "./CamperDetailsClient.module.css";
import notFound from "@/app/not-found";
import Loading from "@/app/loading";

export default function CamperDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"features" | "reviews">("features");

  const { data: item, isLoading } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getCardById(id as string),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 300000, 
  });

 if (isLoading) {
  return <Loading />; 
}

if (!item) {
  notFound(); 
  return null; 
}

  return (
    <section className={css.section}>
      <div className="container">
        <div className={css.header}>
          <h2 className={css.cardTitle}>{item.name}</h2>

          <div className={css.infoBar}> 
            
    <div className={css.rating}>
      <svg width="16" height="16" className={css.starIcon}>
        <use href="/symbol-defs.svg#icon-star" />
      </svg>
      <span className={css.ratingText}>
        {item.rating.toFixed(1)} ({item.reviews.length} Reviews)
      </span>
    </div>

    <div className={css.locationGroup}>
      <svg width="16" height="16" className={css.locationIcon}>
        <use href="/symbol-defs.svg#icon-Vector" />
      </svg>
      <span className={css.locationText}>{item.location}</span>
    </div>
  </div>

  <p className={css.cardPrice}>€{item.price.toFixed(2)}</p>
</div>

      <ul className={css.gallery}>
  {item.gallery.map((img: { original: string }, i: number) => (
    <li key={i} className={css.galleryItem}>
       <img src={img.original} alt={item.name} />
    </li>
  ))}
</ul>

        <p className={css.description}>{item.description}</p>

          <div className={css.tabsHeader}>
            <button 
              onClick={() => setActiveTab("features")} 
              className={activeTab === "features" ? css.active : ""}
            >
              Features
            </button>
            <button 
              onClick={() => setActiveTab("reviews")} 
              className={activeTab === "reviews" ? css.active : ""}
            >
              Reviews
            </button>
          </div>

          <div className={css.contentWrapper}>
            <div>
              {activeTab === "features" ? (
                <FeaturesTab item={item} />
              ) : (
                <ReviewsTab reviews={item.reviews} />
              )}
            </div>

            <aside className={css.sidebar}>
              <BookingForm />
            </aside>
          </div>
        </div>
      
    </section>
  );
}