import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between border-t border-white/5 px-8 py-8 text-sm md:flex-row md:px-12">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <Image
            src="/clyra logo.png"
            alt="Clyra Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-bold text-white">Clyra</span>
      </div>
      <div className="mt-4 text-[#98a6c8] md:mt-0">
        © 2026 Clyra. Built exclusively for construction.
      </div>
    </footer>
  );
}
