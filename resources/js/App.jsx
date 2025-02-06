import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//LAYOUTS
import LayoutPublic from './layouts/LayoutPublic';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutClient from './layouts/LayoutClient';


//AUTH
import Login from './pageauth/Login';
import Register from './pageauth/Register';

//ADMIN
import PanelAdmin from './pageadmin/PanelAdmin';
import UserAll from './pageadmin/UserAll';
import UserUpdate from './pageadmin/UserUpdate';
import CategoriaAll from './pageadmin/CategoriaAll';
import CategoriaStore from './pageadmin/CategoriaStore';
import CategoriaUpdate from './pageadmin/CategoriaUpdate';
import EmpresaAll from './pageadmin/EmpresaAll';
import EmpresaUpdate from './pageadmin/EmpresaUpdate';

//CLIENT
import PanelClient from './pageclient/PanelClient';
import EmpresaAllClient from './pageclient/EmpresaAll';
import EmpresaStore from './pageclient/EmpresaStore';
import EmpresaUpdateClient from './pageclient/EmpresaUpdate';

//PUBLIC
import Home from './pagepublic/Home';
import ProtectedRoutes from './pageauth/ProtectedRoutes';
import NotFound from './pagepublic/NotFound';
import Categorias from './pagepublic/Categorias';
import Categoria from './pagepublic/Categoria';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path='/*' element={<NotFound/>} />
          <Route index element={<Home/>} />
          <Route path='/categorias' element={<Categorias/>}/>
          <Route path='/categorias/:slug' element={<Categoria/>}/>
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route  path="/admin" element={<LayoutAdmin/>}>
            <Route  index element={<PanelAdmin/>}/>
            <Route path="user" element={<UserAll/>} />
            <Route path="user/edit/:id" element={<UserUpdate/>} />
            <Route path='categoria' element={<CategoriaAll/>}/>
            <Route path='categoria/create' element={<CategoriaStore/>}/>
            <Route path="categoria/edit/:id" element={<CategoriaUpdate/>} />
            <Route path='empresa' element={<EmpresaAll/>}/>
            <Route path="empresa/edit/:id" element={<EmpresaUpdate/>} />
          </Route>

          <Route  path="/client" element={<LayoutClient/>}>
            <Route index element={<PanelClient/>}/>
            <Route path='empresa' element={<EmpresaAllClient/>}/>
            <Route path='empresa/create' element={<EmpresaStore/>}/>
            <Route path="empresa/edit/:id" element={<EmpresaUpdateClient/>} />

          </Route>
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
            <App/>
    )
}