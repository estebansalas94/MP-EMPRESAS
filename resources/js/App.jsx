import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutPublic from './layouts/LayoutPublic';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutClient from './layouts/LayoutClient';
import Pagehome from './pagepublic/Pagehome';
import ProtectedRoutes from './pageauth/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<Pagehome/>} />
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