import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log(dataPointsValue);
  const totalMaximum = Math.max(...dataPointsValue);
  console.log(props);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((data, index) => {
        return (
          <ChartBar
            key={index}
            label={data.label}
            value={data.value}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};
export default chart;
