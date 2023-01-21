import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import Loader from "./components/Loader"
const App = React.lazy(() => import('./App.jsx'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader/>}>
    <App />
    </React.Suspense>
   
  </React.StrictMode>
);

