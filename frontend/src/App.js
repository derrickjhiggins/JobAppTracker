import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import data
import products from './data/products.js'

// import components and pages
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js'
import CreatePage from './pages/CreatePage.js'
import EditPage from './pages/EditPage.js'
import TopicsPage from './pages/TopicsPage.js'
// import ContactPage from './pages/ContactPage.js';

//import styles and images
import './App.css';

function App() {

    const [song, setSongToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Derrick Higgins MERN Project 
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                {/* <Route path="/contact" element={<ContactPage />} />  */}
                <Route path="/log" element={<LogPage setSong={setSongToEdit} />} />
                <Route path="/add-music" element={<CreatePage />} />
                <Route path="/edit-music" element={<EditPage song={song} />} />
                <Route path="/topics" element={<TopicsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/order" element={<OrderPage products={products} />} />
                <Route path="/staff" element={<StaffPage />} />
            </Routes>
          </section>
        </main>
        
        <footer>
        <p>Copyright &copy; 2023 DJH SWE INC. All rights reserved. This website and its content are the property of Derrick Higgins. You may not reproduce, redistribute, or use any of the content on this website without the express written permission of Derrick Higgins. Unauthorized use of any materials or content from this website is strictly prohibited and may result in legal action. If you have any questions or would like to request permission to use any of the content on this website, please contact Derrick at higginde@oregonstate.edu.</p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
