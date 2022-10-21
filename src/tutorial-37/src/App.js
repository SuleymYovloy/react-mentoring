import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullPost } from "./pages/FullPost";
import { NotFound } from "./pages/NotFound";

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<h2>Войти / Авторизоваться</h2>}/>
                <Route path="/post/:id" element={<FullPost />} />
            </Routes>
            <Footer />
        </>
    );

    // if (pathname === '/home') {
    //   return (
    //     <>
    //       <Header />
    //       <Home/>
    //     </>
    //   );
    // }
    // if (pathname === '/about') {
    //   return (
    //     <>
    //       <Header/>
    //       <About />
    //     </>
    //   );
    // }
    // if (pathname === '/login') {
    //   return (
    //     <>
    //       <Header/>
    //       <h3>Авторизоваться/Войти</h3>
    //     </>
    //   );
    // }
}

export default App;
