
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/Item/Item';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
    <ItemDetailContainer></ItemDetailContainer>
      <Routes>
        
        <Route path='/' element={<ItemListContainer />}/>
      
        <Route path='detail/' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter></>

  );

}

export default App;
