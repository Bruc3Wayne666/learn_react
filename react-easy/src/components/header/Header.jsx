import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                src='data:image/png;base64,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'
                alt="kok"/>
            <h1 className={classes.title}>
                ShadowRoom
            </h1>
        </header>
    )
}

export default Header