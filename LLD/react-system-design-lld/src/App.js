import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route   element={<ProtectedRoute />} >
            <Route path="/about" element={<AboutUs />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
