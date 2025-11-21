# Bengaluru Fitness Connection (BFC) Website

A premium, high-performance website for **Bengaluru Fitness Connection**, designed to showcase the gym's facilities, membership plans, and vibrant community.

## 🚀 Features

*   **Premium Design**: Dark-themed aesthetic with gold accents (`bfc-yellow`), featuring glassmorphism, gradients, and custom cursors.
*   **Interactive UI**:
    *   **Parallax Masonry Gallery**: A stunning 3D scrolling gallery powered by `framer-motion`.
    *   **Smooth Scrolling**: Implemented using `lenis` for a buttery-smooth experience.
    *   **Micro-interactions**: Hover effects, scroll reveals, and animated text.
*   **SEO Optimized**:
    *   Dynamic meta tags (Title, Description, OG Tags) using `react-helmet-async`.
    *   Structured Data (JSON-LD) for LocalBusiness rich snippets.
    *   Sitemap and Robots.txt included.
*   **Responsive**: Fully optimized for all devices, from mobile phones to large desktops.
*   **Performance**: Fast loading times with optimized assets and code splitting.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Scrolling**: [Lenis](https://lenis.studio/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)
*   **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Gymwebsite
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # If you encounter peer dependency issues (due to React 19):
    npm install --legacy-peer-deps
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📦 Deployment

This project is configured for easy deployment on **Netlify**.

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📂 Project Structure

```
src/
├── assets/         # Images and videos
├── components/     # Reusable UI components (Navbar, Hero, Gallery, etc.)
├── data/           # Static data files
├── App.jsx         # Main application component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles and Tailwind directives
```

## 📄 Pages

*   **Home**: Hero section, features, and overview.
*   **Plans**: Detailed membership options.
*   **Gallery**: immersive visual experience of the gym.
*   **Contact**: Location, contact info, and hours.
*   **Terms & Privacy**: Legal pages.
*   **404**: Custom "Not Found" page.
