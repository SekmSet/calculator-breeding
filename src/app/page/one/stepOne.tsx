"use client";
import {useApp} from "../../context/appContext";
import Button from "../../component/Button";
import "./stepOne.scss";

const Etape1 = () => {
    const { setBreedValue, setStepValue } = useApp();

    const validateChien = () => {
        setStepValue(2);
        setBreedValue("CHIEN")
    };

    const validateChat = () => {
        setStepValue(2);
        setBreedValue("CHAT")
    };

    return (
        <div className="etape1-container">
            <h1>JE CALCULE POUR UN :</h1>
            <Button
                text="CHIEN"
                disabled={true}
                handle={validateChien}
                className="disabled"
            />

            <Button
                text="CHAT"
                handle={validateChat}
            />
        </div>
    );
};

export default Etape1;
