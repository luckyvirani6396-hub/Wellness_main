import {
  FaAppleAlt, FaOm, FaBrain, FaWeight, FaBuilding, FaHeartbeat,
  FaStethoscope, FaRunning, FaChild, FaFemale, FaMoon,
  FaChalkboardTeacher, FaClipboardCheck, FaAward, FaUserCog, FaFlask, FaSpa,
} from 'react-icons/fa';
import { GiStomach, GiMeditation, GiWeightScale } from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  nutrition: FaAppleAlt,
  yoga: FaOm,
  stress: FaBrain,
  weight: FaWeight,
  corporate: FaBuilding,
  lifestyle: FaHeartbeat,
  clinical: FaStethoscope,
  sports: FaRunning,
  child: FaChild,
  women: FaFemale,
  meditation: GiMeditation,
  sleep: FaMoon,
  workshop: FaChalkboardTeacher,
  mental: FaBrain,
  assessment: FaClipboardCheck,
  gut: GiStomach,
  pcos: FaFemale,
  diabetes: MdHealthAndSafety,
  mindfulness: GiMeditation,
  expert: FaAward,
  personalized: FaUserCog,
  science: FaFlask,
  holistic: FaSpa,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export default function ServiceIcon({ name, className = 'w-6 h-6' }: ServiceIconProps) {
  const Icon = iconMap[name] || FaHeartbeat;
  return <Icon className={className} />;
}

export { GiWeightScale };
