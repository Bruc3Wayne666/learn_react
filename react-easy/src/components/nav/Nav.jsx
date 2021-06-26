import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div><NavLink className={classes.navLink} activeClassName={classes.active} to='/dialogs'>Messages</NavLink></div>
            <div><NavLink className={classes.navLink} activeClassName={classes.active} to='/friends'>Friends</NavLink></div>
            <div><NavLink className={classes.navLink} activeClassName={classes.active} to='/profile'>Profile</NavLink></div>
        </nav>
    )
}

export default Nav