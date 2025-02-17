import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import Home from './Pages/Home';
import Coef from './Pages/Coef';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/coef" element={<Coef />} />
      </Routes>
    </Router>
  )
}

export default App;
