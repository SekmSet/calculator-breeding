"use client";
import {useApp} from "../../context/appContext";
import "./stepOne.scss";

const Etape1 = () => {
    const { setBreedValue, setStepValue } = useApp();

    const validateChien = () => {
        setStepValue(2);
        setBreedValue("CHIEN")
    };

    const validateChat = () => {
        console.log('rez')
        setStepValue(2);
        setBreedValue("CHAT")
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
