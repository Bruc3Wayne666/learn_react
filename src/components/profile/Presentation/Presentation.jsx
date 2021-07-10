import classes from "../Presentation/Presentation.module.css";
import Info from "./Info/Info";
import Preloader from "../../common/preloader/Preloader";

const Presentation = props => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.presentation}>
            <div>
                <img className={classes.avatar} src={props.profile.photos.large} alt="llll"/>
            </div>
            <Info name={props.profile.fullName} about={props.profile.aboutMe}/>
        </div>
    )
}

export default Presentation