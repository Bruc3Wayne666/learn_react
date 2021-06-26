// import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import Profile from "./components/profile/Profile.jsx";
import Dialogs from "./components/dialogs/Dialogs";
import classes from "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'


// component
const App = props => {
    const ShowDialogs = () => <Dialogs state={props.state.dialogsPage}/>
    const ShowProfile = () => <Profile state={props.state.profilePage}/>

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ShowDialogs}/>
                <Route exact path='/profile' render={ShowProfile}/>
            </div>
        </div>
    )
}


export default App;
