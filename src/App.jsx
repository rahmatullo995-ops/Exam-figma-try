import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
