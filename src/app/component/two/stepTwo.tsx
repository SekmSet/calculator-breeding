"use client";
import {useApp} from "../../context/appContext";
import cats from "../../cats.json";
import "./stepTwo.scss";

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
        <div className="etape2-container">
            <button className="back-button" onClick={back}>RETOUR</button>

            <div className="form">
                {/*<div className="form-card">*/}
                    <label>JE CHOISIS LA RACE</label>
                    <select onChange={(e) => setBreedValue(e.target.value)} name="chats" id="chat-select">
                        {cats.list?.map((cat : CatType, index: number) => (
                            <option value={cat.id} key={index}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                {/*</div>*/}


                {/*<div className="form-card">*/}
                    <label>J INDIQUE LA DATE DE SAILLIE</label>
                    <input
                        onChange={(e) => setSaillieDateValue(e.target.value)}
                        type="date"
                        id="date-saillie"
                    />

                 {/*</div>*/}

                {/*<div className="form-card">*/}
                    <label>NOM DE L ANIMAL <span className="facultatif">(facultatif)</span> </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Moka"
                        id="name"
                    />
                 {/*</div>*/}

                <button
                    className={isDisabled ? "disabled" : ""}
                    disabled={isDisabled}
                    onClick={validate}
                >
                    RESULTAT
                </button>
            </div>
        </div>
    );
};

export default Etape2;
