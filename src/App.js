import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import {HashRouter as Router,Route } from 'react-router-dom'
import Home from './components/Home'
import MenContainer from './containers/MenContainer';
import CartContainer from './containers/CartContainer';
import NavbarContainer from './containers/NavbarContainer';
import About from './components/About';
import ContactUs from './components/ContactUs';
import KidsContainer from './containers/KidsContainer';
function App() {
  return (
    <Router>
    <div className="App">
      <NavbarContainer />
    </div>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/men" component={MenContainer}></Route>
    <Route exact path="/kids" component={KidsContainer}></Route>
    <Route exact path="/cart" component={CartContainer}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact-us" component={ContactUs}></Route>
    </Router>
  );
}

export default App;
