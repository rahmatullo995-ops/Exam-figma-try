import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Shop from './pages/shop/Shop';
import { useEffect, useState } from 'react';



const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => setData(data.products))
  }, [])

  
  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
