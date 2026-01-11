import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { getCardById } from "@/lib/api";
import CamperDetailsClient from "./CamperDetailsClient";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  
  const camper = await getCardById(id); 

  return {
    title: camper ? camper.name : "Camper Not Found", 
    description: camper 
      ? camper.description.slice(0, 150) 
      : "The requested camper could not be found.",
    openGraph: {
      title: camper ? camper.name : "Camper Not Found",
      description: camper ? camper.description.slice(0, 150) : "Not found",
      url: `https://traveltrucks-rentals.vercel.app/catalog/${id}`,
      images: [
        {
          url: camper ? camper.gallery[0].thumb : '/images/hero.jpg',
          width: 1200,
          height: 630,
          alt: camper ? camper.name : "Travel Trucks",
        },
      ],
    },
  };
}

export default async function CamperDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => getCardById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
}