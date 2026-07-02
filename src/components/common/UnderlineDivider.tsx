interface UnderlineDividerProps {
  className?: string;
}

export default function UnderlineDivider({ className = 'w-40 h-2.5 text-[#5c8730]/75' }: UnderlineDividerProps) {
  return (
    <svg className={className} viewBox="0 0 300 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5C50 2 150 2 299 5C150 7 50 7 1 5Z" />
    </svg>
  );
}
