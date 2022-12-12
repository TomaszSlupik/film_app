import './App.scss';
import Registeruser from './components/Registeruser/Registeruser';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Mainpageuser from './components/Mainpageuser/Mainpageuser';
import Loginuser from './components/Loginuser/Loginuser';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/register' element={<Registeruser />}/>
            <Route path='/login' element={<Loginuser />}/>
            <Route path='/mainpage' element={<Mainpageuser />}/>
          </Routes>
        </Router>
       

    </div>
  );
}

export default App;
