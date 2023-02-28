import './App.css';
import{Home, Landing, Form, Detail} from "./views"
import {Route, useLocation} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      {/* {location.pathname !== "/" && <Navbar/>} */}
      <Navbar/>
      
      <Route exact path="/" component={Landing}/>
      <Route exact path="/detail" component={Detail}/>
      <Route exact path="/create" component={Form}/>

            
      <Route path="/home" render={()=> <Home/>} />
      
    </div>
  );
}

export default App;
