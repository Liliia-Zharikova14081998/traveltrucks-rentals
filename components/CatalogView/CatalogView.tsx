'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PuffLoader } from "react-spinners"; 
import Sidebar from "../Sidebar/Sidebar";
import CamperList from "../CamperList/CamperList";
import { FilterParams, getCards } from "@/lib/api";
import css from "./CatalogView.module.css"; 
import { Card } from "@/types/card";

const CatalogView = () => {
  const [filters, setFilters] = useState<FilterParams>({
    location: '',
    equipment: [],
    form: [],
  });

  const [page, setPage] = useState(1);
  const [allCampers, setAllCampers] = useState<Card[]>([]);

  const { data: newCampers, isFetching, isLoading } = useQuery({
    queryKey: ['campers', filters, page],
    queryFn: () => getCards(filters, page),
    retry: false, 
    refetchOnWindowFocus: false, 
    staleTime: 60000, 
    placeholderData: (previousData) => previousData,
  });

  useEffect(() => {
    if (newCampers) {
      if (page === 1) {
        setAllCampers(newCampers);
      } else {
        setAllCampers(prev => {
          const combined = [...prev, ...newCampers];
          return Array.from(new Map(combined.map(c => [c.id, c])).values());
        });
      }
    }
  }, [newCampers, page]);

  const handleSearch = (newFilters: FilterParams) => {
    setAllCampers([]); 
    setPage(1);        
    setFilters({...newFilters}); 
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={css.contentWrapper}>
      <Sidebar onSearch={handleSearch} />
      <main className={css.mainContent}>
        {isLoading && allCampers.length === 0 ? (
          <div className={css.loaderContainer}>
            <PuffLoader color="#E44848" size={80} />
          </div>
        ) : (
          <>
            <CamperList campers={allCampers} />
            {newCampers?.length === 4 && (
              <div className={css.loadMoreWrapper}>
                {isFetching ? (
                  <PuffLoader color="#E44848" size={40} />
                ) : (
                  <button 
                    type="button" 
                    className={`${css.loadMoreBtn} button`}
                    onClick={handleLoadMore}
                  >
                    Load More
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default CatalogView;