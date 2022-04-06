import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

import {useSelector} from 'react-redux'

function App() {

  const user = useSelector(state => state.user)
  console.log(user)
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={user ? <Dashboard /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
