import { useState } from 'react';
import ServiceCard from './components/ServiceCard';

const servicesData = [
  {
    id: 1,
    title: 'Landing Page จาก Figma / Adobe XD',
    description: 'แปลงดีไซน์จาก Figma เป็นเว็บไซต์ด้วย React & Tailwind CSS โหลดเร็ว รองรับทุกอุปกรณ์ 100%',
    price: 1000,
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    details: {
      duration: '2 - 3 วัน',
      deliverables: [
        'แปลงไฟล์ Figma เป็น Code (Clean Code & Reusable Component)',
        'รองรับ Responsive ทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)',
        'ปรับแต่ง SEO เบื้องต้น + Meta Tags',
        'Deploy ขึ้น Vercel / Netlify พร้อมใช้งาน'
      ]
    }
  },
  {
    id: 2,
    title: 'พัฒนา Web Application / Dashboard',
    description: 'พัฒนาหน้าเว็บเชื่อมต่อ REST API พร้อมระบบค้นหาและจัดการข้อมูลแบบ Dynamic',
    price: 2500,
    tags: ['React', 'JavaScript', 'REST API'],
    details: {
      duration: '5 - 7 วัน',
      deliverables: [
        'พัฒนา UI หน้าเว็บบอร์ด/ระบบหลังบ้านตามโจทย์',
        'เชื่อมต่อ REST API / Fetch Data (CRUD)',
        'ระบบค้นหา Filter และ Sort ข้อมูล',
        'ระบบแจ้งเตือน Error Handling & Loading State'
      ]
    }
  },
  {
    id: 3,
    title: 'ปรับแต่ง UI/UX & Dark Mode',
    description: 'ปรับแต่งและแก้ไขหน้าเว็บเดิมให้ทันสมัย ปรับโทนสี Dark Mode และเพิ่ม Animation ปฏิสัมพันธ์',
    price: 1500,
    tags: ['Tailwind CSS', 'UI/UX', 'Design'],
    details: {
      duration: '1 - 2 วัน',
      deliverables: [
        'รีดีไซน์หน้าเว็บเดิมให้ทันสมัยสไตล์ Modern Web',
        'เพิ่มระบบสลับ Dark Mode / Light Mode',
        'ใส่ Micro-interaction Animations สวยงาม'
      ]
    }
  },
  {
    id: 4,
    title: 'Performance & Speed Optimization',
    description: 'ปรับแต่งการโหลดหน้าเว็บให้รวดเร็ว ลดขนาดไฟล์ และปรับโครงสร้างให้ติดอันดับบน Google (SEO)',
    price: 1200,
    tags: ['Vite', 'SEO', 'Performance'],
    details: {
      duration: '1 - 2 วัน',
      deliverables: [
        'วิเคราะห์และเพิ่มคะแนน Lighthouse / PageSpeed',
        'Compress รูปภาพและ Optimize Assets ทั้งหมด',
        'จัดโครงสร้าง HTML Semantic Tag เพื่อ SEO'
      ]
    }
  }
];

const techStack = ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS v4', 'Vite', 'Git / GitHub', 'REST API', 'Vercel'];

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md fixed top-0 left-0 right-0 z-40 px-6 py-4 h-[65px]">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
          <span className="text-xl font-extrabold text-white">Dev<span className="text-cyan-400">Portfolio</span></span>
          <div className="flex gap-6 text-sm font-bold text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition">หน้าแรก</a>
            <a href="#skills" className="hover:text-cyan-400 transition">สกิล</a>
            <a href="#services" className="hover:text-cyan-400 transition">บริการ</a>
            <button onClick={() => setIsContactOpen(true)} className="hover:text-cyan-400 transition cursor-pointer">ติดต่อ</button>
          </div>
        </div>
      </nav>

      {/* Hero Section (เต็ม 1 หน้าจอ) */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 text-center max-w-4xl mx-auto pt-[65px]">
        <span className="text-cyan-400 text-xs font-semibold uppercase bg-cyan-950/80 px-3.5 py-1.5 rounded-full border border-cyan-800/60 mb-6">
          FRONT-END DEVELOPER SERVICES
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          เปลี่ยนดีไซน์ <span className="text-cyan-400">Figma</span> เป็นเว็บไซต์จริง<br />
          เริ่มต้น <span className="text-cyan-400">1,000 บาท</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          รับทำ Landing Page และเว็บนำเสนอผลงาน สวยงาม โหลดไว รองรับมือถือ 100% พร้อมใช้งานภายใน 2-3 วัน
        </p>
        <button onClick={() => setIsContactOpen(true)} className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-7 py-3 rounded-xl shadow-md transition cursor-pointer">
          ติดต่องาน / ปรึกษาฟรี
        </button>
      </section>

      {/* Tech Stack Section (เต็ม 1 หน้าจอ) */}
      <section id="skills" className="min-h-screen flex flex-col justify-center items-center border-t border-b border-slate-800/80 bg-slate-900/40 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-8">TECHNOLOGIES & TOOLS I USE</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-slate-900 border border-slate-800 text-slate-200 text-base md:text-lg font-medium px-6 py-3.5 rounded-2xl shadow-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (เต็ม 1 หน้าจอ) */}
      <section id="services" className="min-h-screen flex flex-col justify-center items-center py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-3">บริการที่คุณจะได้รับ</h2>
        <p className="text-slate-400 text-sm md:text-base text-center mb-8">คลิกที่การ์ดบริการเพื่อดูรายละเอียดการส่งมอบงานเพิ่มเติม</p>

        <div className="max-w-md w-full mx-auto mb-10">
          <input
            type="text"
            placeholder="🔍 ค้นหาบริการ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:border-cyan-400 w-full text-sm outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {filteredServices.map((item) => (
            <div key={item.id} onClick={() => setSelectedService(item)} className="cursor-pointer">
              <ServiceCard title={item.title} description={item.description} price={item.price} tags={item.tags} />
            </div>
          ))}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl max-w-lg w-full text-left shadow-2xl relative">
            <span className="text-xs text-cyan-400 font-semibold uppercase">รายละเอียดบริการ</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-3">{selectedService.title}</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">{selectedService.description}</p>
            
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6">
              <p className="text-xs text-slate-400 mb-2 font-medium">สิ่งที่ลูกค้าจะได้รับ:</p>
              <ul className="list-disc list-inside text-xs md:text-sm text-slate-300 space-y-1.5">
                {selectedService.details.deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs text-slate-400">
                <span>ระยะเวลาทำงาน: <strong className="text-cyan-400">{selectedService.details.duration}</strong></span>
                <span>ราคาเริ่มต้น: <strong className="text-cyan-400 font-bold">฿{selectedService.price.toLocaleString()}</strong></span>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => { setSelectedService(null); setIsContactOpen(true); }} className="flex-1 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-2.5 rounded-xl text-sm transition">
                ติดต่องานนี้
              </button>
              <button onClick={() => setSelectedService(null)} className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-4 py-2.5 rounded-xl text-sm transition">
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full text-left shadow-2xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">ติดต่องาน</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              เบอร์โทร: 063-164-7907 <br />
              Email: borripat25471@gmail.com
            </p>
            <button onClick={() => setIsContactOpen(false)} className="w-full bg-red-500/80 hover:bg-red-500 text-white font-medium py-2 rounded-xl transition">
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}