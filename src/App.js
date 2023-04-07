import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedProduct from './pages/FeaturedProduct';
import AllProduct from './pages/AllProduct';
import { CartItemsContext } from './components/Header';

function App() {

  const [featuredProducts, setFeaturedProducts] = useState([])
  const [products, setProducts] = useState([])
  const [filterColor, setFilterColor] = useState([])
  const [filterMaterial, setFilterMaterial] = useState([])

  const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";

  
     const fetchFeaturedProducts = async() => {

      try{
          await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured', {
              method: "GET",
              headers: {"Authorization": `Bearer ${token}`}
            }).then(res => res.json()).then(json => setFeaturedProducts(json.featured)); 
      }
      catch (error){
          console.log(error)
      }
     }

     const fetchProducts = async() =>{
      try{
          fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
      }).then(res => res.json()).then(json => setProducts(json.products));
      }
      catch(error){
          console.log(error)
      }
     }

     const fetchColors = async() => {
      try{
          fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors', {
              method: "GET",
              headers: {"Authorization": `Bearer ${token}`}
            }).then(res => res.json()).then(json => setFilterColor(json.colors));

      }catch(err){
          console.log(err)
      }
     }

     const fetchMaterials = async() => {
      try{
          fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
      }).then(res => res.json()).then(json => setFilterMaterial(json.material));

      }catch(err){
          console.log(err)
      }
     }
     
     useEffect(()=>{
      fetchFeaturedProducts();
      fetchProducts();
      fetchColors();
      fetchMaterials();
     }, [])
     const[cartItemCount, setCartItemCount] = useState(0)
  return (
    <div className="App">
      <CartItemsContext.Provider value={{cartItemCount, setCartItemCount}}>
        <Router>
        <HeroSection/>
        <Routes>
          <Route path="*" element={<AllProduct products={products}  filterColor={filterColor} filterMaterial= {filterMaterial} />} />
          <Route path="/featured" element={<FeaturedProduct products={products} featuredProducts={featuredProducts} filterColor={filterColor} filterMaterial= {filterMaterial} />} />
        </Routes>
        <Footer/>
      </Router>
      </CartItemsContext.Provider>
    </div>
  );
}

export default App;
