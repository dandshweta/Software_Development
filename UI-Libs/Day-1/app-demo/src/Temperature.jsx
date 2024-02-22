import { useState, memo, useCallback } from "react";
import { changeToC, changeToF } from "./utils/temperature";

const TemperatureC = ({ val, ch }) => {
  const [res, setRes] = useState("");

  const onTemperatureCalculate = useCallback(() => {
    const newTempAfterCalculation = ch ? changeToF(val) : changeToC(val);
    setRes(newTempAfterCalculation);
  }, [ch, val, setRes]);

  return (
    <div>
      <button onClick={onTemperatureCalculate}>Calculate</button>
      <p> {res}</p>
    </div>
  );
};

const TemperatureView = memo(TemperatureC);
export default TemperatureView;
