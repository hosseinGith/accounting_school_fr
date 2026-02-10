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

export default function PaymentsChart() {
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
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span>وضعیت پرداخت شهریه</span>
      </div>
      <div className="bg-white w-full p-2 rounded-xl ">
        <Line data={attendanceData} options={attendanceOptions} />
      </div>
    </div>
  );
}
