import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//LAYOUTS
import LayoutPublic from './layouts/LayoutPublic';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutClient from './layouts/LayoutClient';

//PUBLIC
import Pagehome from './pagepublic/Pagehome';
import ProtectedRoutes from './pageauth/ProtectedRoutes';

//AUTH
import Login from './pageauth/Login';
import Register from './pageauth/Register';
import PanelClient from './pageclient/PanelClient';

//ADMIN
import PanelAdmin from './pageadmin/PanelAdmin';
import UserAll from './pageadmin/UserAll';
import UserUpdate from './pageadmin/UserUpdate';
import CategoriaAll from './pageadmin/CategoriaAll';
import CategoriaStore from './pageadmin/CategoriaStore';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<Pagehome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route  path="/admin" element={<LayoutAdmin/>}>
            <Route  index element={<PanelAdmin/>}/>
            <Route path="user" element={<UserAll/>} />
            <Route path="user/edit/:id" element={<UserUpdate/>} />
            <Route path='categoria' element={<CategoriaAll/>}/>
            <Route path='categoria/create' element={<CategoriaStore/>}/>

          </Route>
          <Route  path="/client" element={<LayoutClient/>}>
            <Route  index element={<Pagehome/>}/>
            <Route index element={<PanelClient/>}/>
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