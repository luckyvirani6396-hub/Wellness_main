export default function SectionDecorations() {
  return (
    <>
      <div className="absolute left-0 top-1/4 w-[280px] h-[450px] bg-gradient-to-r from-[#E8F2EA]/85 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[280px] h-[450px] bg-gradient-to-l from-[#E8F2EA]/85 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />

      <div className="absolute left-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-secondary">
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute right-0 bottom-16 w-[160px] h-[320px] pointer-events-none z-0 opacity-40 transform scale-x-[-1]">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full text-secondary">
          <path d="M15 200C30 170 38 120 28 50" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M28 155C10 148 5 138 12 128C22 136 26 146 28 155Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 150C45 136 48 126 38 116C30 124 28 138 29 150Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 105C12 98 8 88 15 78C25 86 26 96 28 105Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 100C44 86 47 76 37 66C29 74 27 88 28 100Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C18 42 16 32 23 22C28 29 27 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 55C38 42 40 32 33 22C28 29 29 44 28 55Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
}
