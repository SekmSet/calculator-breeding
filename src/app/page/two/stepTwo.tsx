"use client";
import {useApp} from "../../context/appContext";
import cats from "../../cats.json";
import "./stepTwo.scss";
import Button from "@/app/component/Button";

type CatType = {
    id: number;
    name: string
}

const Etape2 = () => {
    const { setStepValue, setBreedValue, setNameValue, setSaillieDateValue, isDisabled } = useApp();

    // Validate form and get to step 3
    const validate = () => {
        setStepValue(3);
    };

    // Get back to the step 1
    const back = () => {
        setStepValue(1);
    };

    const setName = (value : string) => {
        setNameValue(value)
    }

    return (
        <>
            <Button
                text="RETOUR"
                handle={back}
                className="back-button"
            />

            <div className="etape2-container">
                <div className="form">
                    <div className="form-card">
                        <label>CHOIX DE LA RACE</label>
                        <select onChange={(e) => setBreedValue(e.target.value)} name="chats" id="chat-select">
                            {cats.list?.map((cat : CatType, index: number) => (
                                <option value={cat.name} key={index}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-card">
                        <label>DATE DE SAILLIE</label>
                        <input
                            onChange={(e) => setSaillieDateValue(e.target.value)}
                            type="date"
                            id="date-saillie"
                        />
                     </div>

                    <div className="form-card">
                        <label>NOM DE MON ANIMAL <span className="facultatif">(facultatif)</span> </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Obrigada"
                            id="name"
                        />
                     </div>

                    <Button
                        text="RESULTAT"
                        disabled={isDisabled}
                        handle={validate}
                        className={isDisabled ? "disabled" : ""}
                    />
                </div>
            </div>
        </>
    );
}

export default Etape2;
