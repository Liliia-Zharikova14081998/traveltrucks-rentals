'use client';

import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loader-backdrop">
      <PuffLoader color="#E44848" size={100} />
    </div>
  );
}