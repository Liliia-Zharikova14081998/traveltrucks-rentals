import css from "./Header.module.css";
import Link from "next/link";

export default function Header() { 
  return (
      <header className={css.header}>
          <div className='container'>
              <div className={css.headerContainer}>
              <Link href="/" className={css.logo} aria-label="TravelTrucks">
            <svg width="136" height="16">
    <use href="/logo.svg?v=2#icon-Logo" />
  </svg>
          </Link>
          
  <nav>
    <ul className={css.navigation}>
      <li className={css.navigationItem}>
        <Link className={css.navigationLink} href="/">Home</Link>
          </li>
            
        <li className={css.navigationItem}>
        <Link className={css.navigationLink} href="/catalog">Catalog</Link>
        </li>
    </ul>
                  </nav>
                  </div>
    </div>
    </header>
    );
}