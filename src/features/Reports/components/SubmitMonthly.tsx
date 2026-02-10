// MonthlyRegistrationCharts.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ثبت کامپوننت‌های Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SubmitMonthly() {
  const attendanceData = {
    labels: ["مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    datasets: [
      {
        data: [12, 19, 15, 25, 22, 30],
        borderColor: "#0d9488",
        backgroundColor: "rgba(13, 148, 136, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const attendanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        rtl: true,
        labels: {
          font: {
            family: "vazir",
            size: 14,
          },
        },
      },
      tooltip: {
        rtl: true,
        titleFont: {
          family: "vazir",
        },
        bodyFont: {
          family: "vazir",
        },
      },
      title: {
        family: "vazir",
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "vazir",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: "vazir",
          },
        },
        title: {
          family: "vazir",
          display: true,
          text: "تعداد",
        },
      },
    },
  };

  return (
    <div className="p-2 rounded-2xl borderStyle bg-(--background2) gap-8">
      {/* header */}
      <div className="flex gap-4 items-center text-lg font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="var(--primery)"
          className="size-12 bg-(--primery)/15 rounded-2xl p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>

        <span>روند ثبت‌نام ماهانه</span>
      </div>
      <div className="bg-white w-full p-2 rounded-xl ">
        <Line data={attendanceData} options={attendanceOptions} />
      </div>
    </div>
  );
}
