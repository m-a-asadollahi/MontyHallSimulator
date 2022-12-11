//* Type of Chart data for displaying
export type TChartInfo = {
  name: string;
  value: number;
};
//* Type of Simulation Chart component's props
export interface SimulationChartProps {
  data: TChartInfo[];
}

//* Type of Chart Info component's props
export interface ChartInfoType {
  color: string;
}
