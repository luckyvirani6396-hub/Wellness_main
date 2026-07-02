import { clinicalServices } from '../../assets/data/clinicalServices';
import StatsBar from '../common/StatsBar';

const serviceStats = [
  { value: `${clinicalServices.length}+`, label: 'Clinical Services' },
  { value: '100%', label: 'Personalized Plans' },
  { value: '24hr', label: 'Response Time' },
  { value: '10+', label: 'Years Experience' },
];

export default function ServicesStatsBar() {
  return <StatsBar stats={serviceStats} />;
}
