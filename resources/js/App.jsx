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

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<Pagehome/>} />
          <Route path="/login" element={<Login/>} />
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route  path="/admin" element={<LayoutAdmin/>}>
            <Route  index element={<Pagehome/>}/>
          </Route>
          <Route  path="/client" element={<LayoutClient/>}>
            <Route  index element={<Pagehome/>}/>
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
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}