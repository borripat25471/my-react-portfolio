export default function ServiceCard({ title, description, price }) {
  return (
    <div className="bg-slate-800 border border-slate-700 hover:border-cyan-500/50 p-6 rounded-xl shadow-lg transition duration-300 hover:-translate-y-1 flex flex-col justify-between text-left">
      <div>
        <h3 className="text-xl font-bold text-white mb-2 capitalize leading-snug">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
        <span className="text-xs text-slate-500 uppercase font-semibold">ราคาเริ่มต้น</span>
        <span className="text-cyan-400 font-bold text-base">{price} บาท</span>
      </div>
    </div>
  );
}