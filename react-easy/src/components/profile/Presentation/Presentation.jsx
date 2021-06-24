import classes from "../Presentation/Presentation.module.css";
import Info from "./Info/Info";

const Presentation = () => {
    return (
        <div className={classes.presentation}>
            <img className={classes.avatar} src="https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/porsche-logo-in-red-on-black-liana-haraga.jpg?&targetx=0&targety=-35&imagewidth=977&imageheight=810&modelwidth=977&modelheight=740&backgroundcolor=000000&orientation=1&producttype=blanket-coral-60-80" alt=""/>
            <Info />
        </div>
    )
}

export default Presentation