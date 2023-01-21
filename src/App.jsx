
import CountryType from './components/CountryType';
import FoodCards from './components/FoodCards';
import FoodGuide from './components/FoodGuide';
import Footer from './components/Footer';
import Header from './components/Header';
import TopChefs from './components/TopChefs';


function App() {
  return (
    <div className="App overflow-hidden">
     <Header lazy/>
     <FoodCards lazy/>
     <CountryType lazy/>
     <TopChefs lazy/>
     <FoodGuide lazy/>
     <Footer lazy/>
    </div>
  );
}

export default App;
