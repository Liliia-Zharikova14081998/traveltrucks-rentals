# 🚐 Travel Trucks Rentals

**Travel Trucks Rentals** is a modern camper rental platform built with Next.js. It allows users to browse a catalog of vehicles, filter them by various features, view detailed information, manage a "Favorites" list, and book their next adventure.

## 🚀 Demo

🔗 [Live Demo Link](https://08-zustand-topaz-eight.vercel.app/)

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) with `persist` middleware
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) (React Query)
- **Forms & Validation**: [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)
- **Styling**: CSS Modules (Pixel Perfect according to Figma)
- **HTTP Client**: Axios
- **Icons**: SVG Sprites

## ✨ Key Features

- **Dynamic Catalog**: Browse campers with "Load More" pagination (4 items per page).
- **Detailed Camper View**: Dedicated pages for each camper (`/catalog/:id`) with server-side prefetching.
- **Advanced Filtering**: Search by location, vehicle type (Van, Fully Integrated, Alcove), and equipment (AC, TV, Kitchen, etc.).
- **Favorites System**: Add campers to a wishlist. State is persisted in `localStorage`.
- **Booking System**: Interactive booking form with a custom calendar and full field validation.
- **SEO Optimized**: Dynamic metadata generation for every page and OpenGraph support.
- **Error Handling**: Custom 404 and Global Error Boundary pages.

## 💻 Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Liliia-Zharikova14081998/traveltrucks-rentals
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `app/` — Routing, layouts, and server-side logic.
- `components/` — Reusable UI components (Sidebar, Card, Form, Calendar, etc.).
- `lib/` — API services, Axios config, and Zustand stores.
- `types/` — TypeScript interfaces and types.
- `public/` — Static assets (favicon, SVG icons, logo).
