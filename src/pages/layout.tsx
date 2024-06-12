import Navbar from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
