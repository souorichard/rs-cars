import { CarProps } from "../../../../types/Car";

export default function Card({ model, category }: CarProps) {
  return (
    <a href="/">
      <div className="w-60 h-80 flex flex-col bg-zinc-950 rounded hover:scale-[1.02] shadow-lg shadow-black/50 transition-all cursor-pointer">
        <div className="flex-1">
          <img src="/images/car.jpg" className="w-full h-full object-cover object-center" alt="car" />
        </div>
        <div className="px-5 py-3 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-white">{model}</h3>
          <p className="text-sm text-zinc-400 uppercase">{category}</p>
        </div>
      </div>
    </a>
  )
}