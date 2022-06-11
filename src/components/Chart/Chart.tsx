import ChartBar from "./ChartBar";
import "./css/Chart.css";

interface DataPoints {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

interface DataPoint {
  label: string;
  value: number;
}

const Chart = (props: DataPoints) => {
  const dataPointsArray = props.dataPoints.map(
    (dataPoint: DataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointsArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: DataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
