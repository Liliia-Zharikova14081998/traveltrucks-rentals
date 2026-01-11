import Link from "next/link"
import css from "./Hero.module.css";

export default function Hero() {
    return (
      <section className={css.hero}>
        <div className="container">
          <div className={css.heroContent}>
      <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>You can find everything you want in our catalog</p>
          <Link className={`${css.btnHero} button`} href="/catalog" >
            View Now
            </Link>
            </div>
            </div>
            </section>
  );
}