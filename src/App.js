import './App.css';
import Login from './login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './registration';
import Home from './home';


function App() {
  return (
    <div className="App" id='app'>
      <div className="container">
        <div className='main-content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Registration />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
