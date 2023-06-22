"use client";
import {useEffect, useState} from "react";
import {useApp} from "./context/appContext";
import StepOne from "./component/one/stepOne";
import StepTwo from "./component/two/stepTwo";
import StepThree from "./component/three/stepThree";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const { etape } = useApp();

  useEffect(() => {
    if (etape !== undefined) {
      setLoading(true);
    }
  }, [etape]);

  return (
      <>
        {loading && (
            <div className="App">
              {etape === 1 && <StepOne />}

              {etape === 2 && <StepTwo />}

              {etape === 3 && <StepThree />}
            </div>
        )}
      </>
  )
}
