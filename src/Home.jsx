import React from "react";
import CountryType from "./components/CountryType";
import FoodCards from "./components/FoodCards";
import FoodGuide from "./components/FoodGuide";
import Footer from "./components/Footer";
import TopChefs from "./components/TopChefs";
import Loader from "./components/Loader";

const Header = React.lazy(() => import("./components/Header.jsx"));

function Home() {
  return (
    <div className="Home overflow-hidden">
      <React.Suspense fallback={<Loader />}>
        <Header />
        <FoodCards />
        <CountryType />
        <TopChefs />
        <FoodGuide />
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default Home;
