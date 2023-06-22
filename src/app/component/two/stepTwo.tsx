import {useApp} from "../../context/appContext";
import cats from "../../cats.json";
import "./stepTwo.scss";

type CatType = {
    id: number;
    name: string
}

const Etape2 = () => {
    const { setEtape, setRace, setSaillieOvulationDate, saillieDate } = useApp();

    const validate = () => {
        setEtape(3);
    };

    return (
        <div className="etape2-container">
            <h1>CHOISIR UNE RACE : </h1>

            <select onChange={(e) => setRace(e.target.value)} name="chats" id="chat-select">
                {cats.list?.map((cat : CatType, index: number) => (
                    <option value={cat.id} key={index}>
                        {cat.name}
                    </option>
                ))}
            </select>

            <input
                onChange={(e) => setSaillieOvulationDate(e.target.value)}
                type="date"
                id="date-saillie"
            />

            <button
                className={saillieDate === "" ? "disabled" : ""}
                disabled={saillieDate === ""}
                onClick={validate}
            >
                RESULTAT
            </button>
        </div>
    );
};

export default Etape2;
