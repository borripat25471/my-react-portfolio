import { useState } from 'react';
import ServiceCard from './components/ServiceCard';

const servicesData = [
  {
    id: 1,
    title: 'Landing Page จาก Figma',
    description: 'แปลงดีไซน์จาก Figma เป็นเว็บไซต์ด้วย React & Tailwind CSS โหลดเร็ว รองรับทุกอุปกรณ์ 100%',
    price: 1000,
    tags: ['React', 'Tailwind CSS', 'Responsive']
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'พัฒนาเว็บแอปพลิเคชันเชื่อมต่อ REST API พร้อมระบบค้นหาและจัดการข้อมูลแบบ Dynamic',
    price: 2500,
    tags: ['React', 'JavaScript', 'REST API']
  },
  {
    id: 3,
    title: 'UI/UX Enhancement',
    description: 'ปรับแต่งและแก้ไขหน้าเว็บเดิมให้ทันสมัย ปรับโทนสี Dark Mode และเพิ่ม Animation ปฏิสัมพันธ์',
    price: 1500,
    tags: ['Tailwind CSS', 'UI/UX', 'Design']
  },
  {
    id: 4,
    title: 'Performance & Speed Optimization',
    description: 'ปรับแต่งการโหลดหน้าเว็บให้รวดเร็ว ลดขนาดไฟล์ และปรับโครงสร้างให้ติดอันดับบน Google (SEO)',
    price: 1200,
    tags: ['Vite', 'SEO', 'Performance']
  }
];

const techStack = [
  'HTML5 / CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Tailwind CSS v4',
  'Vite',
  'Git / GitHub',
  'REST API',
  'Vercel'
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4 h-[65px]">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Dev<span className="text-cyan-400">Portfolio.</span>
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">หน้าแรก</a>
            <a href="#skills" className="hover:text-cyan-400 transition">สกิล</a>
            <a href="#services" className="hover:text-cyan-400 transition">บริการ</a>
            <button onClick={() => setIsOpen(true)} className="hover:text-cyan-400 transition cursor-pointer">
              ติดต่อ
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-65px)] flex flex-col justify-center items-center px-4 text-center max-w-4xl mx-auto py-12">
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-800/60 mb-6">
          FRONT-END DEVELOPER SERVICES
        </span>
        
        <h1 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
          เปลี่ยนดีไซน์ <span className="text-cyan-400">Figma</span> เป็นเว็บไซต์จริง<br />
          เริ่มต้น <span className="text-cyan-400">1,000 บาท</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          รับทำ Landing Page และเว็บนำเสนอผลงาน สวยงาม โหลดไว รองรับมือถือ 100% พร้อมใช้งานภายใน 2-3 วัน
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-7 py-3 rounded-xl shadow-md hover:shadow-cyan-400/20 transition cursor-pointer text-base"
        >
          ติดต่องาน / ปรึกษาฟรี
        </button>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-12 border-t border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            TECHNOLOGIES & TOOLS I USE
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs md:text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Search Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          บริการที่คุณจะได้รับ
        </h2>
        <p className="text-slate-400 text-sm text-center mb-8">
          เลือกบริการที่ตรงกับความต้องการของคุณ หรือค้นหาจากคำคีย์เวิร์ด
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="🔍 ค้นหาบริการ หรือ เทคโนโลยี (เช่น React, Figma)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 w-full text-sm transition"
          />
        </div>

        {/* Services List */}
        {filteredServices.length === 0 ? (
          <p className="text-center text-slate-500 py-8">ไม่พบบริการที่ตรงกับ "{searchTerm}"</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredServices.map((item) => (
              <ServiceCard 
                key={item.id} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
                tags={item.tags}
              />
            ))}
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