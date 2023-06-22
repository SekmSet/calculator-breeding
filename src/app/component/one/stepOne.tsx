import {useApp} from "../../context/appContext";
import "./stepOne.scss";

const Etape1 = () => {
    const { setEtape, setType } = useApp();

    const validateChien = () => {
        setEtape(2);
        setType("CHIEN");
    };

    const validateChat = () => {
        setEtape(2);
        setType("CHAT");
    };

    return (
        <div className="etape1-container">
            <h1>JE CALCULE POUR UN :</h1>
            <button disabled className="disabled" onClick={validateChien}>
                CHIEN
            </button>
            <button onClick={validateChat}>CHAT</button>
        </div>
    );
};

export default Etape1;
