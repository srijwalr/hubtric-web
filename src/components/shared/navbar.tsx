import Hubtric from '@/assets/icons/Hubtric.png';
import { links, routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 bg-primary-white px-8 py-4'>
      <div className='flex flex-row items-center gap-8 justify-between'>
        <Link to={routes.home()}>
          <img className='w-16' src={Hubtric} alt='Hubtric' />
        </Link>
        <nav className='text-black flex flex-row gap-6'>
          <CustomNavLink to={routes.home()}>Home</CustomNavLink>
          <CustomNavLink to={routes.aboutUs()}>About Us</CustomNavLink>
          <CustomNavLink to={routes.capabilities()}>Capabilities</CustomNavLink>
          <CustomNavLink to={routes.industries()}>Industries</CustomNavLink>
          <CustomNavLink to={routes.contactUs()}>Contact Us</CustomNavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

interface CustomNavLinkProps extends NavLinkProps {
  className?: string;
}

const CustomNavLink = ({ className, to, children }: CustomNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          `font-semibold text-lg transition-colors hover:text-primary ${
            isActive ? 'text-primary' : ''
          }`,
          className
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
