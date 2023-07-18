"use client";
import {useEffect, useState} from "react";
import {useApp} from "./context/appContext";
import StepOne from "./page/one/stepOne";
import StepTwo from "./page/two/stepTwo";
import StepThree from "./page/three/stepThree";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const { step } = useApp();

  useEffect(() => {
    if (step !== undefined) {
      setLoading(true);
    }
  }, [step]);

  return (
      <>
        {loading && (
            <div className="App">
              {step === 1 && <StepOne />}

              {step === 2 && <StepTwo />}

              {step === 3 && <StepThree />}
            </div>
        )}
      </>
  )
}
