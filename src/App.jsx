import { useState, useEffect } from 'react';
import ServiceCard from './components/ServiceCard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // ดึงข้อมูลจาก API เมื่อ Component โหลดครั้งแรก
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
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

  // กรองข้อมูลตามคำค้นหา (Search Filter)
  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen px-4 py-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
          React + API Integration
        </span>
        <h1 className="text-4xl font-extrabold text-white mt-4 mb-3">
          Front-End <span className="text-cyan-400">Developer Portfolio</span>
        </h1>
        <p className="text-slate-400 mb-6 max-w-lg mx-auto text-sm">
          แสดงผลข้อมูลโปรเจกต์ที่ดึงมาจาก External API พร้อมระบบค้นหาข้อมูลแบบ Real-time
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 max-w-xl mx-auto">
          {/* ช่องค้นหา (Search Input) */}
          <input
            type="text"
            placeholder="🔍 ค้นหาโปรเจกต์..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500 w-full text-sm transition"
          />

          {/* ปุ่ม Modal */}
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer whitespace-nowrap text-sm"
          >
            📩 ติดต่องาน
          </button>
        </div>

        {/* แสดงสถานะ Loading ระหว่างรอข้อมูล */}
        {loading ? (
          <p className="text-cyan-400 font-mono animate-pulse">กำลังโหลดข้อมูลจาก API...</p>
        ) : (
          <div>
            {filteredProjects.length === 0 ? (
              <p className="text-slate-500 py-8">ไม่พบโปรเจกต์ที่ตรงกับ "{searchTerm}"</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProjects.map((item) => (
                  <ServiceCard 
                    key={item.id} 
                    title={item.title.substring(0, 20) + '...'} 
                    description={item.body.substring(0, 60) + '...'} 
                    price={item.id * 500} 
                  />
                ))}
              </div>
            )}
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