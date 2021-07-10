import classes from "../Info/Info.module.css";

const Info = props => {
    return (
        <div className={classes.info}>
            <h3 className={classes.name}>
                {props.name}
            </h3>
            <p>
                {props.about}
            </p>
        </div>
    )
}

export default Info