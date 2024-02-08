import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import News from './pages/News.jsx';
import Task from './pages/Task.jsx';
import Hackathon from './pages/Hackathon.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/News" element={<News />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/Hackathon" element={<Hackathon />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;