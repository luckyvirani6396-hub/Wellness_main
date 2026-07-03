import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SITE_NAME } from '../../constants';

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
  light?: boolean;
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span className="inline-flex items-center justify-center shrink-0 bg-transparent">
      <img
        src={logo}
        alt={`${SITE_NAME} logo`}
        draggable={false}
        className={`object-contain ${className}`}
      />
    </span>
  );
}

export default function Logo({
  className = "",
  linkToHome = true,
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2 sm:gap-3 py-1 sm:py-2 ${className}`}>
      <LogoMark className="h-10 sm:h-12 md:h-14 w-auto" />

      <span className="flex flex-col leading-none select-none">
        {/* DAYSTAR */}
        <span
          className="font-bold uppercase text-[15px] sm:text-[18px] md:text-[20px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#D86F1E",
            lineHeight: 1,
          }}
        >
          DAYSTAR
        </span>

        {/* PINNACLE */}
        <span
          className="font-semibold uppercase mt-0.5 text-[13px] sm:text-[16px] md:text-[18px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#73A63C",
            lineHeight: 1,
          }}
        >
          PINNACLE
        </span>

        {/* Decorative line */}
        <div
          className="flex items-center mt-1 w-[95%]"
        >
          <div
            className="flex-1 h-[1px]"
            style={{
              background: "#9AC56A",
            }}
          />

          <span
            className="text-[10px] sm:text-[12px] md:text-[14px] mx-1.5 sm:mx-2.5"
            style={{
              color: "#D86F1E",
              lineHeight: 1,
            }}
          >
            ✦
          </span>

          <div
            className="flex-1 h-[1px]"
            style={{
              background: "#9AC56A",
            }}
          />
        </div>
      </span>
    </span>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex items-center"
        aria-label="Daystar Pinnacle"
      >
        {content}
      </Link>
    );
  }

  return content;
}
