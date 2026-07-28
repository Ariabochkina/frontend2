import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import Home from './Pages/Home';
import Coef from './Pages/Coef';

const APIUrl = "http://127.0.0.1:5000";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage APIUrl={APIUrl} />} />
        <Route path="/home" element={<Home APIUrl={APIUrl} />} />
        <Route path="/coef" element={<Coef APIUrl={APIUrl} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
