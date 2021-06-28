import './App.css';
import Header from "./components/header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from "./components/profile/Profile.jsx";
import Dialogs from "./components/dialogs/Dialogs";
import classes from "./App.css";
import {BrowserRouter, Route} from 'react-router-dom'

// component
const App = props => {
    const ShowDialogs = () => <Dialogs store={props.store} dispatch={props.dispatch}/>
    const ShowProfile = () => <Profile store={props.store} dispatch={props.dispatch}/>

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ShowDialogs}/>
                <Route exact path='/profile' render={ShowProfile}/>
            </div>
        </div>
    )
}


export default App;
