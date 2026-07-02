import logo from '../../assets/logo.png';
import { SITE_NAME } from '../../constants';

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#FFFDF8] via-[#F8FAF6] to-[#EEF5E8]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {/* Soft ambient blobs */}
      <div className="absolute top-1/4 -left-16 w-56 h-56 bg-[#72A93B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-48 h-48 bg-[#004B57]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Orbiting leaves + logo */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40">
          {/* Outer pulse ring */}
          <div className="absolute inset-0 rounded-full border border-[#72A93B]/20 loader-pulse-ring" />

          {/* Spinning orbit track */}
          <div className="absolute inset-2 rounded-full border border-dashed border-[#5C8730]/25 loader-orbit" />

          {/* Orbiting leaves */}
          <div className="absolute inset-0 loader-orbit">
            <img
              src="/images/leaf.png"
              alt=""
              aria-hidden
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm"
            />
            <img
              src="/images/leaf.png"
              alt=""
              aria-hidden
              className="absolute bottom-2 left-1 w-6 h-6 sm:w-7 sm:h-7 object-contain drop-shadow-sm opacity-80"
              style={{ transform: 'rotate(-35deg)' }}
            />
            <img
              src="/images/leaf.png"
              alt=""
              aria-hidden
              className="absolute bottom-2 right-1 w-6 h-6 sm:w-7 sm:h-7 object-contain drop-shadow-sm opacity-80"
              style={{ transform: 'rotate(35deg) scaleX(-1)' }}
            />
          </div>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative loader-logo-float">
              <div className="absolute inset-0 rounded-full bg-[#72A93B]/15 blur-xl scale-150" />
              <img
                src={logo}
                alt={`${SITE_NAME} logo`}
                className="relative w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] object-contain drop-shadow-md"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-script text-xl sm:text-2xl text-[#5C8730] leading-none">
            Nourishing your wellness
          </p>
          <div className="flex items-center gap-1.5">
            <span className="loader-dot w-1.5 h-1.5 rounded-full bg-[#72A93B]" />
            <span className="loader-dot w-1.5 h-1.5 rounded-full bg-[#72A93B] [animation-delay:0.2s]" />
            <span className="loader-dot w-1.5 h-1.5 rounded-full bg-[#72A93B] [animation-delay:0.4s]" />
          </div>
        </div>
      </div>
    </div>
  );
}
