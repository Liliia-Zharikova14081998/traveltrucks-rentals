'use client';

import css from './not-found.module.css';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className={css.container}>
      <h2 className={css.subtitle}>Something went wrong!</h2>
      <p className={css.text}>There was an error loading the data. Please try again.</p>
      
      <button onClick={() => reset()} className="button">
        Try again
      </button>
    </div>
  );
}