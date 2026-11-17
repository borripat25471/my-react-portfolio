import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const projects = [
    {
      category: "UX/UI Design & Front-end Development",
      title: "SmartLearn RPG",
      description: "แพลตฟอร์มการเรียนรู้ออนไลน์ที่นำแนวคิดเกม RPG มาประยุกต์ใช้เพื่อเพิ่มความสนุกและแรงจูงใจ ออกแบบ User Flow, Wireframe และ Prototype บน Figma พร้อมพัฒนาระบบ Quiz Battle",
      tags: ["Figma", "HTML/CSS", "JavaScript", "Gamification"],
      links: [
        { name: "Live Demo", url: "https://smart-learn-rpg.vercel.app/", primary: true },
        { name: "Figma File", url: "https://www.figma.com/design/xWlv3p4qbw84mx5e55DpYM/SmartLeran-RPG?node-id=0-1&t=5ZXwbTsKPOkxfHee-1", primary: false },
        { name: "GitHub", url: "https://github.com/borripat25471/SmartLearn-RPG", primary: false }
      ]
    },
    {
      category: "Web Application Development",
      title: "Fin Food",
      description: "เว็บแอปพลิเคชันสำหรับร้านอาหาร รองรับการจัดการเมนูและการค้นหาข้อมูลอาหาร ออกแบบระบบโดยเน้น User Experience ที่ใช้งานง่าย พัฒนาต่อยอดเพื่อใช้งานจริงในธุรกิจร้านค้า",
      tags: ["React", "Tailwind CSS", "REST API"],
      links: [
        { name: "Live Demo", url: "https://finfriut.vercel.app/", primary: true },
        { name: "GitHub", url: "https://github.com/borripat25471/finfriut", primary: false }
      ]
    },
    {
      category: "UX/UI Design",
      title: "HoloVista",
      description: "เว็บไซต์นำเสนอเทคโนโลยีโฮโลแกรม ออกแบบ Information Architecture และ Responsive Layout ให้นำเสนอข้อมูลที่ซับซ้อนให้อ่านง่าย พร้อมจัดทำ Interactive Prototype",
      tags: ["Figma", "UX Research", "Information Architecture", "Responsive Design"],
      links: [
        { name: "Figma Prototype", url: "https://www.figma.com/proto/sK0dyZHRRHM9NJ8p8ulj0Z/HoloVista?node-id=70-40&t=MJsYm4Ufh6gEArXn-1", primary: true }
      ]
    },
    {
      category: "UX/UI Design",
      title: "Food Delivery App",
      description: "แอปพลิเคชันสั่งอาหารที่ออกแบบเน้นความรวดเร็วและใช้งานง่าย จัดการ Information Architecture และ Flow การสั่งอาหารให้ราบรื่น พร้อมทำ Interactive Prototype",
      tags: ["Figma", "UX Research", "UI Design", "Mobile App"],
      links: [
        { name: "Figma Prototype", url: "https://www.figma.com/proto/wmjGC0JPnttQy1s63yzcJM/food-app?node-id=3-9&t=dEgZHI4Fi1Ls9zxK-1", primary: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-hidden">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full z-50 backdrop-blur-md bg-[#0a0f1c]/80 border-b border-slate-800/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black text-cyan-400">
            Portfolio
          </span>
          <ul className="flex space-x-8 text-sm font-medium text-slate-300">
            
          </ul>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6 mt-10 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white"
          >
            รวมผลงานการออกแบบ UX/UI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              และการพัฒนาเว็บแอปพลิเคชัน
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            By Boriphat Namchang
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 rounded-3xl bg-[#111827] border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide mb-4 w-fit">
                {project.category}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              
              <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Links/Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 transform hover:scale-105 text-center ${
                      link.primary 
                        ? "bg-[#9333ea] text-white hover:bg-[#a855f7] hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}