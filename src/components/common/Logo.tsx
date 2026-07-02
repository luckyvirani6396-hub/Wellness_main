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
  className = '',
  linkToHome = true,
  light = false,
}: LogoProps) {

  const markSize = 'h-10 sm:h-11 md:h-12 w-auto';

  const content = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markSize} />
      {/* Brand name styled to match official Daystar Pinnacle branding */}
      <span className="flex flex-col leading-none select-none">
        <span
          className="font-bold tracking-tight leading-none"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: light ? '#ffffff' : '#14435a',
            letterSpacing: '-0.01em',
          }}
        >
          Daystar
        </span>
        <span
          className="uppercase font-bold tracking-[0.22em] leading-none mt-[3px]"
          style={{
            fontFamily: "'Trebuchet MS', 'Arial', sans-serif",
            fontSize: 'clamp(9px, 1vw, 11px)',
            color: '#6aaa2e',
          }}
        >
          Pinnacle
        </span>
      </span>
    </span>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex shrink-0 items-center hover:opacity-90 transition-opacity"
        aria-label={`${SITE_NAME} home`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
