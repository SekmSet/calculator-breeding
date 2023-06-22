import React, { createContext, useContext, ReactNode, useState } from "react";
import dayjs from "../service/date";

// const AppContext = React.createContext(undefined);

type appContextType = {
    etape: number;
    race: string;
    type: string;
    saillieDate: string;
    ovulation: string;
    setSaillieOvulationDate: (value : string) => void;
    setEtape : (value : number) => void;
    setType : (value : string) => void;
    setRace : (value : string) => void;
    setSaillieDate : (value : string) => void;
    setOvulation : (value : string) => void;
};

type Props = {
    children: ReactNode;
};

const appContextDefaultValues: appContextType = {
    etape : 1,
    race: "",
    type: "",
    saillieDate: "",
    ovulation:"",
    setSaillieOvulationDate: () => {},
    setEtape : () => {},
    setType : () => {},
    setRace : () => {},
    setSaillieDate : () => {},
    setOvulation : () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function useApp() {
    return useContext(AppContext);
}

export const AppProvider = ({children} : Props) => {
    const [etape, setEtape] = useState(1);
    const [type, setType] = useState("");
    const [race, setRace] = useState("");
    const [saillieDate, setSaillieDate] = useState("");
    const [ovulation, setOvulation] = useState("");

    const setSaillieOvulationDate = (value: string) => {
        setSaillieDate(dayjs(value).format("DD/MM/YYYY"));
        setOvulation(dayjs(value).add(1, "day").format("DD/MM/YYYY"));
    };

    const data = {
        etape,
        type,
        race,
        saillieDate,
        ovulation,

        setEtape,
        setType,
        setRace,
        setSaillieDate,
        setOvulation,
        setSaillieOvulationDate,
    };

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>;
};

// export default AppContext;
