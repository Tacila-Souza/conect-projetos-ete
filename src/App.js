import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './Paginas/Home';
import Cursos from './Paginas/Cursos';
import Sobre from './Paginas/Sobre';
import Projeto from './Paginas/Projeto';
import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import Paglogin from './Paginas/Paglogin';
import Admin from './Paginas/Admin';
import ModalAdicionarProjeto from './Paginas/ModalAdicionarProjeto';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <>
< BrowserRouter>

< Routes >
  
  <Route path='/' element={<Home />}/>
  <Route path='/Cursos' element={<Cursos/>}/>
  <Route path='/Sobre' element={<Sobre/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Cadastro' element={<Cadastro/>}/>
  <Route path='/Paglogin' element={<Paglogin/>}/>
  <Route path='/Projeto' element={<Projeto/>}/>
  <Route path='/Admin' element={<Admin/>}/>
  <Route path='/ModalAdicionarProjeto' element={<ModalAdicionarProjeto/>}/>
</Routes>
</BrowserRouter >

    </>
 
  );
}

export default App;
