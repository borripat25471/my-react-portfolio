import { useState, useEffect } from 'react';
import ServiceCard from './components/ServiceCard';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

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

  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Dev<span className="text-cyan-400">Portfolio.</span>
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">หน้าแรก</a>
            <a href="#services" className="hover:text-cyan-400 transition">บริการ</a>
            <button onClick={() => setIsOpen(true)} className="hover:text-cyan-400 transition cursor-pointer">
              ติดต่อ
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 text-center max-w-4xl mx-auto">
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          FRONT-END DEVELOPER SERVICES
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mt-6 mb-4 leading-tight">
          เปลี่ยนดีไซน์ <span className="text-cyan-400">Figma</span> เป็นเว็บไซต์จริง<br />
          เริ่มต้น <span className="text-cyan-400">1,000 บาท</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          รับทำ Landing Page และเว็บนำเสนอผลงาน สวยงาม โหลดไว รองรับมือถือ 100% พร้อมใช้งานภายใน 2-3 วัน
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-cyan-400/20 transition cursor-pointer text-base"
        >
          ติดต่องาน / ปรึกษาฟรี
        </button>
      </section>

      {/* Services & Search Section */}
      <section id="services" className="py-12 px-4 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          บริการที่คุณจะได้รับ
        </h2>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="🔍 ค้นหาบริการ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-400 w-full text-sm transition"
          />
        </div>

        {/* Dynamic Content */}
        {loading ? (
          <p className="text-center text-cyan-400 font-mono animate-pulse">กำลังโหลดข้อมูล...</p>
        ) : (
          <div>
            {filteredProjects.length === 0 ? (
              <p className="text-center text-slate-500 py-8">ไม่พบบริการที่ตรงกับ "{searchTerm}"</p>
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
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl max-w-sm w-full text-left shadow-2xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">ส่งข้อความติดต่องาน</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              เบอร์โทร: 063-164-7907 <br />
              Email: borripat25471@gmail.com
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-red-500/80 hover:bg-red-500 text-white font-medium py-2 rounded-lg transition cursor-pointer"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}