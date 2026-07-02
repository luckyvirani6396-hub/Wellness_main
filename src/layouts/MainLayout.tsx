import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={`flex-1 ${isHome ? 'pt-0' : 'pt-[50px] lg:pt-[100px]'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
