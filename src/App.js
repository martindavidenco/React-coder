
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Item from './components/Item/Item';
import NavBar from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName'element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter></>

  );

}

export default App;
