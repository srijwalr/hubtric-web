import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
