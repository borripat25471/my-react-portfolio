import ServiceCard from './components/ServiceCard';
import { useState } from 'react';



export default function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const servicesList = [
    { id: 1, title: 'Figma to HTML/CSS', desc: 'แปลงงานดีไซน์เป็นโค้ดสะอาด รองรับทุกหน้าจอ', price: 1000 },
    { id: 2, title: 'React Landing Page', desc: 'สร้าง Web App หน้าเดียวด้วย React + Tailwind', price: 1500 },
    { id: 3, title: 'API Integration', desc: 'เชื่อมต่อระบบหลังบ้านดึงข้อมูลมาแสดงผล', price: 2000 },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen px-4 py-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
          React + Tailwind CSS
        </span>
        <h1 className="text-4xl font-extrabold text-white mt-4 mb-3">
          Front-End <span className="text-cyan-400">Developer Portfolio</span>
        </h1>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
          เรียนรู้ Component, Props และ useState สำหรับเตรียมตัวยื่นสมัครฝึกงาน
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition mb-12 cursor-pointer"
        >
          📩 ติดต่องาน (เปิด Modal)
        </button>

        {/* Render Cards ด้วย Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((item) => (
            <ServiceCard 
              key={item.id} 
              title={item.title} 
              description={item.desc} 
              price={item.price} 
            />
          ))}
        </div>

        {/* Modal ทับหน้าจอเมื่อ isOpen เป็น true */}
        {isOpen && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl max-w-sm w-full text-left shadow-2xl">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">ส่งข้อความติดต่องาน</h2>
              <p className="text-slate-300 text-sm mb-4">
                เบอร์โทร: 063-164-7907 <br />
                Email: borripat25471@gmail.com[cite: 1]
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition cursor-pointer"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 