import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Perfil from './components/Account/Perfil';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import ProductAdmin from './components/Admin/FormProduct/ProductAdmin'
import ProductAdminEdit from './components/Admin/FormProduct/ProductAdminEdit';
import ProviderCreate from './components/Admin/FormProvider/PrividerCreate';
import NotFound from './components/404/404';
import Providers from './components/Providers/Providers';
import './App.css';
import FormularioUsuario from './components/Account/UserCreate/UserCreate';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Perfil />} />
        <Route exact path='/homeAdmin' element={<HomeAdmin />} />
        <Route exact path= '/productAdmin' element={<ProductAdmin />}/>
        <Route exact path= '/productAdminEdit' element={<ProductAdminEdit />}/>
        <Route exact path= '/providerCreate' element={<ProviderCreate />}/>
        <Route exact path= '/providers' element={<Providers />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
