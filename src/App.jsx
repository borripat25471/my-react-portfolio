import { useState, useEffect } from 'react';
import ServiceCard from './components/ServiceCard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ดึงข้อมูลจาก API เมื่อ Component โหลดครั้งแรก
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen px-4 py-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
          React + API Integration
        </span>
        <h1 className="text-4xl font-extrabold text-white mt-4 mb-3">
          Front-End <span className="text-cyan-400">Developer Portfolio</span>
        </h1>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
          แสดงผลข้อมูลโปรเจกต์ที่ดึงมาจาก External API ด้วย useEffect
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition mb-12 cursor-pointer"
        >
          📩 ติดต่องาน (เปิด Modal)
        </button>

        {/* แสดงสถานะ Loading ระหว่างรอข้อมูล */}
        {loading ? (
          <p className="text-cyan-400 font-mono animate-pulse">กำลังโหลดข้อมูลจาก API...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((item) => (
              <ServiceCard 
                key={item.id} 
                title={item.title.substring(0, 20) + '...'} 
                description={item.body.substring(0, 60) + '...'} 
                price={item.id * 500} 
              />
            ))}
          </div>
        )}

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl max-w-sm w-full text-left shadow-2xl">
              <h2 className="text-xl font-bold text-cyan-400 mb-2">ส่งข้อความติดต่องาน</h2>
              <p className="text-slate-300 text-sm mb-4">
                เบอร์โทร: 063-164-7907 <br />
                Email: borripat25471@gmail.com
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