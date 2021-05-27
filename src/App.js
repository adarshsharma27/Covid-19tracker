import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import{Route,Switch,Redirect} from 'react-router-dom'
import Navbar from  './components/Navbar';
import Home from './components/Home'
import WorldData from './components/WorldData';
import Footer from './components/Footer'
function App() {
  return (
  <>
   <Navbar/>
   <Switch>
    <Route exact path="/"  component={Home}/>  
    <Route    exact path="/worldinfo"  component={WorldData}/>  
    <Route path='/cowin' component={() => { window.location.href = 'https://www.cowin.gov.in/'; return null;}}/>
   <Redirect to ="/"/>
   </Switch>
   <Footer/>

   </>
  );
}

export default App;
