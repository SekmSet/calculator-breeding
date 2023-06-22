import { useEffect, useState} from "react";
import dayjs from "../../service/date";
import {useApp} from "../../context/appContext";
import "./stepThree.scss";

const Etape3 = () => {
    const { setEtape, setRace, setSaillieDate, setType, saillieDate, ovulation } =
        useApp();

    const validate = () => {
        setEtape(1);
        setRace("");
        setSaillieDate("");
        setType("");
    };

    const [echographie, setEchographie] = useState({ jour20: "", jour25: "" });
    const [radiographie, setRadiographie] = useState({ jour50: "", jour55: "" });
    const [naissance, setNaissance] = useState({
        jour64: "",
        jour65: "",
        jour66: "",
    });

    useEffect(() => {
        const echographieJ20 = dayjs(ovulation, "DD/MM/YYYY").add(20, "day").format("DD/MM/YYYY");
        const echographieJ25 = dayjs(ovulation, "DD/MM/YYYY").add(25, "day").format("DD/MM/YYYY");

        setEchographie({
            jour20: echographieJ20,
            jour25: echographieJ25,
        });

        const radiographie50 = dayjs(ovulation, "DD/MM/YYYY").add(50, "day").format("DD/MM/YYYY");
        const radiographie55 = dayjs(ovulation, "DD/MM/YYYY").add(55, "day").format("DD/MM/YYYY");
        setRadiographie({ jour50: radiographie50, jour55: radiographie55 });

        const naissance64 = dayjs(ovulation, "DD/MM/YYYY").add(64, "day").format("DD/MM/YYYY");
        const naissance65 = dayjs(ovulation, "DD/MM/YYYY").add(65, "day").format("DD/MM/YYYY");
        const naissance66 = dayjs(ovulation, "DD/MM/YYYY").add(66, "day").format("DD/MM/YYYY");
        setNaissance({
            jour64: naissance64,
            jour65: naissance65,
            jour66: naissance66,
        });
    }, []);

    console.log(naissance);
    return (
        <div className="etape3-container">
            <h1>RESULTAT : </h1>

            <div className="table">
                <div className="head">
                    <div className="label">
                        <div>Saillie</div>
                        <div className="jours" />
                    </div>
                    <div className="label">
                        <div>Ovulation</div>
                        <div className="jours">
                            <div>J+1</div>
                        </div>
                    </div>
                    <div className="label">
                        <div>Echoagraphie</div>
                        <div className="jours">
                            <div>J+20</div>
                            <div>J+25</div>
                        </div>
                    </div>
                    <div className="label">
                        <div>Radiographie</div>
                        <div className="jours">
                            <div>J+50</div>
                            <div>J+55</div>
                        </div>
                    </div>
                    <div className="label">
                        <div>Mise bas</div>
                        <div className="jours">
                            <div>J+64</div>
                            <div>J+65</div>
                            <div>J+66</div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="dates">{saillieDate}</div>
                    <div className="dates">{ovulation}</div>
                    <div className="dates">
                        <div>{echographie?.jour20}</div>
                        <div>{echographie?.jour25}</div>
                    </div>
                    <div className="dates">
                        <div>{radiographie?.jour50}</div>
                        <div>{radiographie?.jour55}</div>
                    </div>
                    <div className="dates">
                        <div>{naissance?.jour64}</div>
                        <div>{naissance?.jour65}</div>
                        <div>{naissance?.jour66}</div>
                    </div>
                </div>
            </div>
            <button onClick={validate}>RECOMMENCER</button>
        </div>
    );
};

export default Etape3;
