import { Routes, Route } from "react-router-dom";
import './App.css';
import  Home from './pages/Home'
import  Management from './pages/Management'
import Clientes from './pages/Clientes'
import Vendas from './pages/Vendas'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/management" element={<Management />} />    
        <Route path="/clientes" element={<Clientes />} />        
        <Route path="/vendas" element={<Vendas />} />  
      </Routes>
    </>
  );
}
