import './App.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import {HashRouter as Router,Route } from 'react-router-dom'
import Home from './components/Home'
import Men from './components/Men';
import Kids from './components/Kids';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/men" component={Men}></Route>
    <Route exact path="/kids" component={Kids}></Route>
    <Route exact path="/cart" component={Cart}></Route>
    </Router>
  );
}

export default App;
