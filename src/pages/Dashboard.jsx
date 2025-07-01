import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  // Mendefinisikan warna tema utama
  const primaryColor = "#1D5B5C"; // Hijau Teal Gelap
  const accentColor = "#EFD070"; // Emas/Kuning Kusam

  // Fungsi helper untuk mengubah warna hex menjadi RGBA untuk Chart.js
  const hexToRgba = (hex, alpha) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Data ringkasan kartu untuk klinik gigi
  const stats = [
    { label: "Pendapatan Hari Ini", value: "Rp 15.000.000", percent: "+12%" },
    { label: "Pasien Baru Hari Ini", value: "15", percent: "+8%" },
    { label: "Janji Temu Mendatang", value: "32", percent: "+5%" },
    { label: "Prosedur Terpopuler", value: "Pembersihan Gigi", percent: "75%" },
  ]

  // Data untuk grafik "Jumlah Prosedur Bulanan Tahun Ini" (Bar Chart)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Prosedur (dalam unit)",
        data: [50, 65, 60, 75, 80, 95, 90, 85, 100, 110, 120, 130],
        backgroundColor: hexToRgba(primaryColor, 0.7),
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: primaryColor } },
      title: { display: true, text: 'Jumlah Prosedur Bulanan Tahun Ini', color: primaryColor },
    },
    scales: {
      x: {
        ticks: { color: primaryColor }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Prosedur',
          color: primaryColor
        },
        ticks: { color: primaryColor }
      }
    }
  }

  // Data untuk grafik "Pertumbuhan Pasien Tahun Ini" (Line Chart)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Total Pasien Terdaftar",
        data: [200, 220, 250, 280, 310, 340, 370, 400, 430, 460, 490, 520],
        borderColor: primaryColor,
        backgroundColor: hexToRgba(primaryColor, 0.3),
        fill: true,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: primaryColor } },
      title: { display: true, text: 'Pertumbuhan Pasien Tahun Ini', color: primaryColor },
    },
    scales: {
      x: {
        ticks: { color: primaryColor }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Pasien',
          color: primaryColor
        },
        ticks: { color: primaryColor }
      }
    }
  }

  return (
    <div className="p-6 space-y-8 bg-gray-100 min-h-screen">
      <h1 className={`text-3xl font-bold text-[${primaryColor}] mb-6`}>Dashboard Klinik Gigi</h1>
      {/* Garis pemisah dengan warna aksen kuning */}
      <hr className={`border-t-2 border-[${accentColor}]`} />

      {/* Statistik Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            {/* Menggunakan warna utama untuk nilai, dan warna aksen kuning untuk persentase */}
            <h2 className={`text-2xl font-bold text-[${primaryColor}] flex items-center gap-2`}>
              {value}
              {/* Memberikan bayangan teks tipis agar warna kuning lebih terlihat pada latar putih */}
              <span className={`text-xs font-semibold text-[${accentColor}] drop-shadow-sm`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      <hr className={`border-t-2 border-[${accentColor}]`} />

      {/* Grafik Jumlah Prosedur Bulanan */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <Bar options={barOptions} data={barData} />
      </div>

      <hr className={`border-t-2 border-[${accentColor}]`} />

      {/* Grafik Pertumbuhan Pasien */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <Line options={lineOptions} data={lineData} />
      </div>
    </div>
  )
}

export default Dashboard