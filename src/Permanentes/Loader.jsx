import { Spinner } from "reactstrap";

export default function Loader(props) {
    return (
        (props.loading || props.mensaje) && <div className="loader">
            {props.loading && <div className="loader__spinner"></div>}
            {props.mensaje && <div className="loader__mensaje">{props.mensaje}</div>}
        </div>
    )
}