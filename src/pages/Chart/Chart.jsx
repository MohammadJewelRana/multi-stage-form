import { Box, Paper } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Heading from "../Shared/Heading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [50, 70, 80, 40, 100, 90, 130],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <Heading
        heading={"Sales Dashboard"}
        subHeading={"Monthly saled dashboard for a year"}
      ></Heading>
      <Box sx={{ p: 2 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Bar data={data} options={options} />
        </Paper>
      </Box>
    </div>
  );
};

export default Chart;
