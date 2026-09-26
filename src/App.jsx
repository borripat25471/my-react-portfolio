import React, { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const projectsData = [
    {
      title: "SmartLearn RPG",
      category: "UX/UI Design & Front-end Development",
      description: "แพลตฟอร์มการเรียนรู้ออนไลน์ที่นำแนวคิดเกม RPG มาประยุกต์ใช้เพื่อเพิ่มความสนุกและแรงจูงใจ ออกแบบ User Flow, Wireframe และ Prototype บน Figma พร้อมพัฒนาระบบ Quiz Battle",
      tags: ["Figma", "HTML/CSS", "JavaScript", "Gamification"],
      linkText: "Live Demo",
      linkUrl: "https://smart-learn-rpg.vercel.app/",
      figmaUrl: "https://www.figma.com/design/xWlv3p4qbw84mx5e55DpYM/Untitled?node-id=0-1&t=4EuzfSBtmk8XuMDS-1"
    },
    {
      title: "Food Mamei",
      category: "UX/UI Design & Front-end Development",
      description: "เว็บไซต์สำหรับค้นหาและจัดการเมนูอาหาร ออกแบบ UX/UI Architecture บน Figma พร้อมพัฒนา Web App เชื่อมต่อ External Recipe API และ AI-Assisted Coding",
      tags: ["Figma", "React", "Tailwind CSS", "REST API"],
      linkText: "Live Demo",
      linkUrl: "https://foodmamei-3wjb.vercel.app/",
      figmaUrl: "https://www.figma.com/design/ZjulxYfKioBw7uMmdj3rPx/Untitled?node-id=0-1&p=f&t=UUnOCfkMfFisi5TZ-0"
    },
    {
      title: "HoloVista",
      category: "UX/UI Design",
      description: "เว็บไซต์นำเสนอเทคโนโลยีโฮโลแกรม ออกแบบ Information Architecture และ Responsive Layout ให้นำเสนอข้อมูลที่ซับซ้อนให้อ่านง่าย พร้อมจัดทำ Interactive Prototype",
      tags: ["Figma", "UX Research", "Information Architecture", "Responsive Design"],
      linkText: "Figma Prototype",
      linkUrl: "https://www.figma.com/proto/sK0dyZHRRHM9NJ8p8ulj0Z/HoloVista?node-id=70-40&t=eih1gCOKJHyTDZKV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      figmaUrl: ""
      
    },
    {
      title: "Food Delivery App",
      category: "UX/UI Design",
      description: "แอปพลิเคชันสั่งอาหารที่ออกแบบเน้นความรวดเร็วและใช้งานง่าย จัดการ Information Architecture และ Flow การสั่งอาหารให้ราบรื่น พร้อมทำ Interactive Prototype",
      tags: ["Figma", "UX Research", "UI Design", "Mobile App"],
      linkText: "Figma Prototype",
      linkUrl: "https://www.figma.com/proto/wmjGC0JPnttQy1s63yzcJM/food-app?node-id=3-9&p=f&t=1g4zsWs4x5LrDD2q-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      figmaUrl: ""
      
    },
   
  ];

  const filteredProjects = projectsData.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen">
      <section id="projects" className="min-h-screen snap-start flex flex-col justify-center items-center py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-3">Featured Projects BY BORIPHAT NAMCHANG</h2>
        <p className="text-slate-400 text-sm md:text-base text-center mb-8">รวมผลงานการออกแบบ UX/UI และการพัฒนาเว็บแอปพลิเคชัน</p>
        
        

        {/* แสดงผลการ์ดโปรเจกต์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all shadow-xl">
              <div>
                <span className="text-xs font-semibold px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ปุ่มลิงก์ผลงานแยกส่วน */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={project.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors shadow-sm"
                >
                   {project.linkText}
                </a>

                {project.figmaUrl && (
                  <a 
                    href={project.figmaUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-purple-300 rounded-lg border border-purple-500/30 transition-colors shadow-sm"
                  >
                     Figma File
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}