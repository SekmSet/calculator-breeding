"use client";
import { useEffect, useState} from "react";
import dayjs from "../../service/date";
import {createPDF} from "../../service/pdf";
import {useApp} from "../../context/appContext";
import "./stepThree.scss";

const Etape3 = () => {
    const [echographie, setEchographie] = useState({ day20: "", day25: "" });
    const [radiographie, setRadiographie] = useState({ day50: "", day55: "" });
    const [naissance, setNaissance] = useState({
        day64: "",
        day65: "",
        day66: "",
    });
    const { name, breed, reset, setStepValue, setNameValue, setSaillieDateValue, setDisabled, saillieDate, ovulation } =
        useApp();

    const restart = () => {
        reset()
    };

    const back = () => {
        setNameValue("")
        setSaillieDateValue(null)
        setDisabled(true)
        setStepValue(2);
    };

    const save = () => {
        createPDF({
            name,
            breed,
            ovulation,
            echographie,
            radiographie,
            naissance,
            saillieDate
        })
    };

    useEffect(() => {
        const echographieJ20 = dayjs(ovulation, "DD/MM/YYYY").add(20, "day").format("DD/MM/YYYY");
        const echographieJ25 = dayjs(ovulation, "DD/MM/YYYY").add(25, "day").format("DD/MM/YYYY");

        setEchographie({
            day20: echographieJ20,
            day25: echographieJ25,
        });

        const radiographie50 = dayjs(ovulation, "DD/MM/YYYY").add(50, "day").format("DD/MM/YYYY");
        const radiographie55 = dayjs(ovulation, "DD/MM/YYYY").add(55, "day").format("DD/MM/YYYY");
        setRadiographie({ day50: radiographie50, day55: radiographie55 });

        const naissance64 = dayjs(ovulation, "DD/MM/YYYY").add(64, "day").format("DD/MM/YYYY");
        const naissance65 = dayjs(ovulation, "DD/MM/YYYY").add(65, "day").format("DD/MM/YYYY");
        const naissance66 = dayjs(ovulation, "DD/MM/YYYY").add(66, "day").format("DD/MM/YYYY");
        setNaissance({
            day64: naissance64,
            day65: naissance65,
            day66: naissance66,
        });
    }, []);

    return (
        <>
            <button className="back-button"  onClick={back}>RETOUR</button>
            <div className="etape3-container">
                {name.length > 0 ? (<h1>RESULTAT POUR MON {breed ? breed : "ANIMAL"} <span id="name">{name}</span> : </h1>) : (<h1>RESULTAT POUR MON {breed ? breed : "ANIMAL"} : </h1>)}

                <div className="cards">
                    <div className="box">
                        <h3>Saillie</h3>
                        <p className="span">
                            <b>Jour + 0</b> <span>{saillieDate}</span>
                        </p>
                    </div>

                    <div className="box">
                        <h3>Ovulation</h3>
                        <p className="span">
                            <b>Jour + 1</b> <span>{ovulation} </span>
                        </p>
                    </div>


                    <div className="box">
                        <h3>Echoagraphie</h3>
                        <p className="span">
                            <b>Jour + 20</b> <span>{echographie?.day20}</span>
                        </p>
                        <p className="span">
                            <b>Jour + 25</b> <span>{echographie?.day25}</span>
                        </p>
                    </div>

                    <div className="box">
                        <h3>Radiographie</h3>
                        <p className="span">
                            <b>Jour + 50</b> <span>{radiographie?.day50}</span>
                        </p>
                        <p className="span">
                            <b>Jour + 55</b> <span>{radiographie?.day55}</span>
                        </p>
                    </div>

                    <div className="box">
                        <h3>Mise bas</h3>
                        <p className="span">
                            <b>Jour + 64</b> <span>{naissance?.day64}</span>
                        </p>
                        <p className="span">
                            <b>Jour + 65</b> <span>{naissance?.day65}</span>
                        </p>
                        <p className="span">
                            <b>Jour + 66</b> <span>{naissance?.day66}</span>
                        </p>
                    </div>
                </div>

                <button className="savePDF" onClick={save}>TELECHARGER (PDF)</button>
                <button onClick={restart}>RECOMMENCER</button>
            </div>
        </>
    );
};

export default Etape3;
