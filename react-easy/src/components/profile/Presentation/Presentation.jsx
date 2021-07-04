import classes from "../Presentation/Presentation.module.css";
import Info from "./Info/Info";

const Presentation = () => {
    return (
        <div className={classes.presentation}>
            <div>
                <img className={classes.avatar} src="https://lacatholics.org/wp-content/uploads/2020/02/la-2160x1215.jpg" alt="llll"/>
            </div>
            <Info />
        </div>
    )
}

export default Presentation