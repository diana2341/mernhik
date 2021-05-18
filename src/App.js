import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import SignUp from './components/SignUp';
import About from './components/About';
// import { Calendar } from 'rsuite';
import Calendar from './components/CalendarComponent'
import Projects from './components/Projects';
import Login from './components/Login';
import EditProfile from './components/EditProfile';
import Sidenavigation from './components/Sidenavigation';
import Tasks from './Tasks';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      {/* <Sidenavigation/> */}
      <Router>
       <Route exact path='/' render={()=> <Home/>}/>
       <Route exact path='/about' render={()=> <About/>}/>
       <Route exact path='/signup' render={()=> <SignUp/>}/>
       <Route exact path='/calendar' render={()=> <Calendar/>}/>
       <Route exact path='/projects' render={()=> <Projects/>}/>
       <Route exact path='/login' render={()=> <Login/>}/>
       <Route exact path='/edit-profile' render={()=> <EditProfile/>}/>
       <Route exact path='/tasks' render={()=> <Tasks/>}/>






      </Router>

    </div>
  );
}

export default App;
