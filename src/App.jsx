import React from "react";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./Home.jsx"));

function App() {
  return (
    <div className="App overflow-hidden">
      <React.Suspense fallback={<Loader />}>
        <Home />
      </React.Suspense>
    </div>
  );
}

export default App;
