// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import Profile from "./components/profile/Profile.jsx";


// component
const App = () => {
  return (
    <div className="app-wrapper">
        <Header/>
        <Nav/>
        <Profile/>
    </div>
  )
}


export default App;
