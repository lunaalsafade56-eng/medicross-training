import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import { ROUTES } from '../../constants/router';
import DoctorsPage from "../../features/doctors/pages/DoctorsPage";
// import DoctorDetails from '../../features/doctors/pages/DoctorDetails';
import MainLayout from '../../components/layout/MainLayout';
import "../../styles/global.css"


const AppRouter: React.FC= () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<MainLayout/>}>
    {/* main page */}
    <Route path={ROUTES.HOME} element={<Home />}/>
    <Route path={ROUTES.ABOUT} element ={<About/>}/>
    <Route path={ROUTES.CONTACT} element={<Contact/>}/>
    {/* features page */}
    <Route path={ROUTES.DOCTORS} element={<DoctorsPage/>}/>
    {/* <Route path={ROUTES.DOCTOR_DETAILS} element={<DoctorDetails/>}/> */}
    </Route>
   </Routes>
   </BrowserRouter>
  );
};

export default AppRouter;