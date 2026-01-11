import css from "./page.module.css";
import CatalogView from "@/components/CatalogView/CatalogView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Catalog', 
  description: "Browse our extensive catalog of travel trucks and campers for rent.",
  openGraph: {
    title: 'Catalog | Travel Trucks Rentals',
    description: 'Find the best campers for your next adventure in our catalog.',
    images: [
      {
        url: '/images/hero.jpg', 
        width: 1200,
        height: 630,
        alt: 'Travel Trucks Catalog',
      },
    ],
  },
};

export default function CatalogPage() {
  return (
    <div className={`container ${css.catalogWrapper}`}>
      <CatalogView />
    </div>
  );
}

