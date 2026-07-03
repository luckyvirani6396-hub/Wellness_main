import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { clinicalServices } from '../../assets/data/clinicalServices';

interface ServicesDropdownProps {
  isActive: boolean;
  isLight?: boolean;
  isCapsule?: boolean;
}

export default function ServicesDropdown({ isActive, isLight = false, isCapsule = false }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const closeDropdown = () => setIsOpen(false);

  const linkClass = isCapsule
    ? `inline-flex items-center gap-1 px-3 py-1.5 text-[14.5px] font-semibold transition-all duration-200 ${
        isActive ? 'text-[#72A93B]' : 'text-[#1a2e32] hover:text-[#72A93B]'
      }`
    : `inline-flex items-center gap-1 px-3.5 xl:px-4.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
        isActive
          ? isLight
            ? 'text-[#D2F154] bg-white/10'
            : 'text-secondary bg-secondary/10'
          : isLight
          ? 'text-white/85 hover:text-[#D2F154] hover:bg-white/5'
          : 'text-dark/70 hover:text-secondary hover:bg-secondary/5'
      }`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/services"
        className={linkClass}
      >
        Services
        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[280px]"
          >
            <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-border overflow-hidden">
              {clinicalServices.map((service, index) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  onClick={closeDropdown}
                  className={`block px-5 py-3.5 text-sm text-dark hover:bg-secondary/10 hover:text-secondary transition-colors ${
                    index !== clinicalServices.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {service.title}
                </Link>
              ))}
              <Link
                to="/services"
                onClick={closeDropdown}
                className="block px-5 py-3.5 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 border-t border-border transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileServicesListProps {
  isServicesActive: boolean;
  onNavigate: () => void;
}

export function MobileServicesList({ isServicesActive, onNavigate }: MobileServicesListProps) {
  const [expanded, setExpanded] = useState(false);

  const handleNavigate = () => {
    setExpanded(false);
    onNavigate();
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-colors ${
          isServicesActive
            ? 'text-[#72A93B] bg-[#72A93B]/5'
            : 'text-[#1a2e32] hover:text-[#72A93B] hover:bg-gray-50'
        }`}
      >
        Services
        <HiChevronDown className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 mt-1"
          >
            {clinicalServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                onClick={handleNavigate}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#1a2e32]/85 hover:text-[#72A93B] transition-colors"
              >
                <HiChevronRight className="w-4 h-4 shrink-0" />
                {service.title}
              </Link>
            ))}
            <Link
              to="/services"
              onClick={handleNavigate}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#72A93B] hover:text-[#5C8730] transition-colors"
            >
              <HiChevronRight className="w-4 h-4 shrink-0" />
              View All Services
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
