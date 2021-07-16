import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {HashRouter as Router,Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Route exact path="/home" component={Home}></Route>
    </Router>
  );
}

export default App;
