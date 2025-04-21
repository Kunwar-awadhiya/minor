import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body.jsx';
import Browse from './components/Browse.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import FAQ from './components/FAQ/Faq.jsx'; 
import Breathing from './components/BreathingComponent/BreathingSection.jsx'; 
import Books from './components/Books/Books.jsx'; 
import axios from 'axios';
import RewardTree from './components/RewardTree/RewardTree.jsx';
import Video from './components/Video/Video.jsx'; 
import Bubble from './components/Games/Bubble/Bubble.jsx'; 
import HeroCard from './components/HeroCard/HeroCard.jsx';
import HeroCard2 from './components/HeroCard/HeroCard2.jsx';  
import ColorMatch from './components/Games/ColorMatch/colorMatch.jsx'; 
import Memory from './components/Games/Memory/Memory.jsx'; 
import ProtectedRoute from './components/ProtectedRoute.jsx';

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.withCredentials = true; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/header' element={<Header />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <Route path='/browse' element={<ProtectedRoute><Browse /></ProtectedRoute>} />
        <Route path='/body' element={<ProtectedRoute><Body /></ProtectedRoute>} />
        <Route path='/placeformpage' element={<ProtectedRoute><PlacesFormPage /></ProtectedRoute>} />
        <Route path='/reward' element={<ProtectedRoute><RewardTree /></ProtectedRoute>} />
        <Route path='/breathing' element={<ProtectedRoute><Breathing /></ProtectedRoute>} />
        <Route path='/books' element={<ProtectedRoute><Books /></ProtectedRoute>} />
        <Route path='/video' element={<ProtectedRoute><Video /></ProtectedRoute>} />
        <Route path='/bubble' element={<ProtectedRoute><Bubble /></ProtectedRoute>} />
        <Route path='/color' element={<ProtectedRoute><ColorMatch /></ProtectedRoute>} />
        <Route path='/memory' element={<ProtectedRoute><Memory /></ProtectedRoute>} />
        <Route path='/HeroCard' element={<ProtectedRoute><HeroCard /></ProtectedRoute>} />
        <Route path='/HeroCard2' element={<ProtectedRoute><HeroCard2 /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;


