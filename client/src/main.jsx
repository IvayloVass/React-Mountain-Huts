import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import HutDetails from './components/HutDetails.jsx';
import Register from './components/Register.jsx';
import PublicationForm from './components/PublicationForm.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';

import './assets/css/screen.css'


ReactDOM.createRoot(document.getElementsByClassName('site-wrapper')[0])
    .render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/hut/details/:id" element={<HutDetails />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path="/create/publication" element={<PublicationForm />} />
            </Routes>
        </BrowserRouter>
    )
