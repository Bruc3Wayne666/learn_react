import './App.css';
import Header from "./components/header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {Route} from 'react-router-dom'
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

// component
const App = props => {
    const ShowDialogs = () => <DialogsContainer />
    const ShowUsers = () => <UsersContainer />
    const ShowProfile = () => <ProfileContainer />

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ShowDialogs}/>
                <Route path='/users/' render={ShowUsers}/>
                <Route path='/profile/:userId?' render={ShowProfile}/>
            </div>
        </div>
    )
}


export default App;
