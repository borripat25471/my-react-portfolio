export default function ServiceCard({ title, description, price, tags, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between h-full cursor-pointer text-left group"
    >
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[11px] font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center border-t border-slate-800/80 pt-4 mt-auto">
        <span className="text-xs text-slate-500">เริ่มต้น</span>
        <span className="text-cyan-400 font-extrabold text-lg">฿{price.toLocaleString()}</span>
      </div>
    </div>
  );
}