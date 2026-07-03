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
    <span className={`inline-flex items-center gap-3 py-2  ${className}`}>
      <LogoMark className="h-14 w-auto" />

      <span className="flex flex-col leading-none select-none">
        {/* DAYSTAR */}
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#D86F1E",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          DAYSTAR
        </span>

        {/* PINNACLE */}
        <span
          style={{
            marginTop: "1px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontWeight: 600,
            color: "#73A63C",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          PINNACLE
        </span>

        {/* Decorative line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "2px",
            width: "95%",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#9AC56A",
            }}
          />

          <span
            style={{
              color: "#D86F1E",
              fontSize: "14px",
              margin: "0 10px",
              lineHeight: 1,
            }}
          >
            ✦
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
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
