import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loading from '../components/common/Loading';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const ServiceDetail = lazy(() => import('../pages/Services/ServiceDetail'));
const Programs = lazy(() => import('../pages/Programs/Programs'));
const FAQ = lazy(() => import('../pages/FAQ/FAQ'));
const WellnessHub = lazy(() => import('../pages/WellnessHub/WellnessHub'));
const WellnessArticle = lazy(() => import('../pages/WellnessHub/WellnessArticle'));
const SuccessStories = lazy(() => import('../pages/SuccessStories/SuccessStories'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="programs" element={<Programs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="health-hub" element={<WellnessHub />} />
          <Route path="health-hub/:slug" element={<WellnessArticle />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
