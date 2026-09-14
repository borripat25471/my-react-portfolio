export default function ServiceCard({ title, description, price }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition text-left">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <span className="inline-block bg-slate-900 text-cyan-300 text-xs px-3 py-1 rounded-md font-mono border border-slate-700">
        ราคาเริ่มต้น {price} บาท
      </span>
    </div>
  );
}