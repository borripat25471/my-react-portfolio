export default function ServiceCard({ title, description, price, tags }) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10 group">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags && tags.map((tag, index) => (
            <span key={index} className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <span className="text-xs text-slate-500 font-medium">เริ่มต้น</span>
        <span className="text-lg font-extrabold text-cyan-400">
          ฿{price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}