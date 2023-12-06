import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import HutDetails from './components/HutDetails.jsx';
import Register from './components/Register.jsx';
import PublicationForm from './components/PublicationForm.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import EditPublication from './components/EditPublication.jsx';
import { AuthProvider } from './components/context/AuthContext.jsx';
import ProtectedRoutes from './components/guard/ProtectedRoutes.jsx';

import './assets/css/screen.css'
import NotFound from './components/NotFound.jsx';



ReactDOM.createRoot(document.getElementsByClassName('site-wrapper')[0])
    .render(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/hut/details/:id" element={<HutDetails />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/create/publication" element={<PublicationForm />} />
                        <Route path="/edit/publication/:id" element={<EditPublication />} />
                        <Route path='/logout' element={<Logout />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
