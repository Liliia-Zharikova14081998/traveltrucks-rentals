import Link from 'next/link';
import css from './not-found.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Travel Trucks",
  description: "The page you are looking for does not exist in Travel Trucks Rentals.",
  openGraph: {
    title: "Page not found | Travel Trucks",
    description: "The page you are looking for does not exist.",
    url: 'https://08-zustand-topaz-eight.vercel.app/not-found',
    images: [
      {
        url: '/images/hero.jpg', 
        width: 1200,
        height: 630,
        alt: "Travel Trucks 404 Page",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <main className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>404</h1>
        <h2 className={css.subtitle}>Oops! Camper not found</h2>
        <p className={css.text}>
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link href="/catalog" className={`${css.errorBtn} button`}>
          Back to Catalog
        </Link>
      </div>
    </main>
  );
}