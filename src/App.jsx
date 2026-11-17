import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-900">
      {/* Navbar แบบกระจกฝ้า (Glassmorphism) */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-slate-950/60 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portfolio.
          </span>
          <ul className="flex space-x-8 text-sm font-medium text-slate-300">
            <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Projects</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-40 pb-20">
        <div className="flex flex-col items-center text-center space-y-8 mt-10">
          {/* Badge สถานะ */}
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
            <div className="bg-slate-950 rounded-full px-6 py-2 text-sm font-semibold tracking-wide">
              🚀 Available for new projects
            </div>
          </div>
          
          {/* หัวข้อหลัก */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Creative Developer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Building Digital Magic
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            เปลี่ยนไอเดียให้กลายเป็นหน้าเว็บที่สวยงาม ใช้งานง่าย และทำงานได้อย่างรวดเร็ว ด้วย React และ Tailwind CSS
          </p>
          
          {/* ปุ่ม CTA */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              ดูผลงานทั้งหมด
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-500 transition-all transform hover:-translate-y-1">
              ติดต่อฉัน
            </button>
          </div>
        </div>

        {/* Feature/Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">
          {[
            { title: 'Frontend Development', desc: 'เชี่ยวชาญการสร้าง UI ที่ซับซ้อนด้วย React และระบบ State Management' },
            { title: 'Responsive Design', desc: 'ออกแบบให้แสดงผลได้สวยงามทุกหน้าจอ ตั้งแต่มือถือจนถึงเดสก์ท็อป' },
            { title: 'Performance First', desc: 'เขียนโค้ดที่สะอาด โหลดไว และรองรับ SEO อย่างเต็มประสิทธิภาพ' }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 cursor-default">
              <div className="w-12 h-12 bg-slate-800 rounded-xl mb-6 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <div className="w-6 h-6 bg-cyan-400 rounded-md"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}