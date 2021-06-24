import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div><a className={classes.navLink} href='/'>Message</a></div>
            <div><a className={classes.navLink} href='/'>Friends</a></div>
            <div><a className={classes.navLink} href='/'>Profile</a></div>
        </nav>
    )
}

export default Nav