import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SITE_NAME } from '../../constants';

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
  variant?: 'header' | 'footer';
  light?: boolean;
}

function LogoMark({
  className = '',
}: {
  className?: string;
}) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 bg-transparent"
    >
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
}: LogoProps) {

  const markSize = 'h-11 sm:h-12 md:h-15 w-auto'

  const content = (
    <span className={`inline-flex items-center ${className}`}>
      <LogoMark className={markSize} />
      <span className="sr-only">{SITE_NAME}</span>
    </span>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex shrink-0 items-center hover:opacity-95 transition-opacity"
        aria-label={`${SITE_NAME} home`}
      >
        {content}
      </Link>
    );
  }

  return content;
}
