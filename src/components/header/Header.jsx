import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo_dark from "./../../logo_dark.svg"
import search_icon from "./../../search_icon.svg"
// import logo_dark from "./../../logo_dark.svg"


const Header = props => {
    return (
        <header className={classes.header}>
            <NavLink to="/profile">
                <img className={classes.logo}
                     src={logo_dark}
                     alt="kok"/>
            </NavLink>
            <div className={classes.search}>
                <img src={search_icon} alt="search" className={classes.icon}/>
                <textarea rows={1} className={classes.content}>
                    Search
                </textarea>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ? `${props.login}` :
                    <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    )
}

export default Header