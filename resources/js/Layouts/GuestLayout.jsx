import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="border-b border-black bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-black"
          >
            LearnWithBen
          </Link>
          <div className="h-3 w-3 rounded-full bg-black" aria-hidden="true" />
        </div>
      </nav>
      <main className="relative min-h-[calc(100vh-57px)] overflow-hidden px-6 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.035]" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 border-b border-l border-black bg-black" />
        <div className="relative">{children}</div>
      </main>
    </div>
  );
}
