import { allBlogPosts } from '../../assets/data/content';
import { WELLNESS_CATEGORIES } from '../../constants';
import StatsBar from '../common/StatsBar';

const hubStats = [
  { value: `${allBlogPosts.length}+`, label: 'Expert Articles' },
  { value: `${WELLNESS_CATEGORIES.length - 1}`, label: 'Topic Categories' },
  { value: 'Weekly', label: 'Fresh Content' },
  { value: '100%', label: 'Free Resources' },
];

export default function HubStatsBar() {
  return <StatsBar stats={hubStats} />;
}
