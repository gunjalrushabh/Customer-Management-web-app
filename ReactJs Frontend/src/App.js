import './App.css';
import Home from './Components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Addusers from './Components/Addusers';
import Editusers from './Components/Editusers';
import ViewUser from './Components/ViewUser';






function App() {
  return (
   <div className='bgimg'>
    <Router>
    <Navbar/>
    <Routes>
    {/* <Route exact path='/' element={<First />}/> */}
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/add' element={<Addusers/>} />
    {/* <Route exact path='/add1' element={<Addusers1/>} /> */}
    <Route exact path='/edituser/:id' element={<Editusers />} />
              {/* to={`edituser/${rushabh.id}`} >Edit</Link> */}
    <Route exact path='/view/:id' element={<ViewUser />} />
    </Routes>
    </Router>
   
   
    {/* <Home2 /> */}
   </div>
  );
}

export default App;
