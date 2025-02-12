import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import Home from './Pages/Home';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
