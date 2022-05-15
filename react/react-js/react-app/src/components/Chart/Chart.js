import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={Math.floor(10000 * Math.random())}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
