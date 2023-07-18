"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import {dayjs, formatDate, addDate} from "../service/date";

type appContextType = {
    step: number;
    name: string;
    breed: string;
    category: string;
    saillieDate: string | null;
    ovulation: string;
    isDisabled: boolean;
    reset: () => void;
    setStepValue: (value : number) => void;
    setNameValue: (value : string) => void;
    setCategoryValue: (value : string) => void;
    setBreedValue: (value : string) => void;
    setSaillieDateValue: (value : string | null) => void;
    setDisabled: (value: boolean) => void;
};

type Props = {
    children: ReactNode;
};

const appContextDefaultValues: appContextType = {
    step : 1,
    name: "",
    breed: "",
    category: "",
    saillieDate: null,
    ovulation:"",
    isDisabled: true,

    reset: () => {},
    setStepValue: (value: number) => {},
    setNameValue: (value: string) => {},
    setCategoryValue: (value: string) => {},
    setBreedValue: (value: string) => {},
    setSaillieDateValue: (value: string | null) => {},
    setDisabled: (value: boolean) => {}
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function useApp() {
    return useContext(AppContext);
}

export const AppProvider = ({children} : Props) => {
    const [step, setStep] = useState<number>(1);
    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [breed, setBreed] = useState<string>("");
    const [saillieDate, setSaillieDate] = useState<string | null>(null);
    const [ovulation, setOvulation] = useState<string>("");
    const [isDisabled, setDisabled] = useState<boolean>(true)

    const setStepValue = (value : number) => {
        setStep(value)
    }

    const setNameValue = (value : string) => {
        setName(value)
    }

    const setCategoryValue = (value : string) => {
        setCategory(value)
    }

    const setBreedValue = (value : string) => {
        setBreed(value)
    }

    const setSaillieDateValue = (value: string | null) => {
        if (value !== null) {
            setSaillieDate(formatDate({value, format: "DD/MM/YYYY"}));
            setSaillieDate(addDate({value, addValue: 1, unit: "day", format: "DD/MM/YYYY"}));
            setDisabled(false)
        }
    };

    const reset = () => {
        setStep(1);
        setBreed("");
        setSaillieDate("");
        setCategory("");
        setName("");
        setDisabled(true)
    }

    const data = {
        step,
        name,
        category,
        breed,
        ovulation,
        saillieDate,
        isDisabled,

        reset,
        setDisabled,
        setStepValue,
        setNameValue,
        setCategoryValue,
        setBreedValue,
        setSaillieDateValue,
    };

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>;
};

// export default AppContext;
