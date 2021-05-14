import { Fragment } from "react";
import "./Cbutton.css"

const Cbutton = (props) => {
    return (
    <Fragment>
        <button className = "button-design" onClick={props.onTouched}>
        {props.children}
        </button>
    </Fragment>
    );
}

export default Cbutton;